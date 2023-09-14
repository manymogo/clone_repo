import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });
  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5" />

          <input
            type="url"
            placeholder="URL을 넣어주세요"
            value={article.url}
            onChange={(e) => {
              setArticle({ ...article, url: e.target.value });
            }}
            onKeyDown={handleKeyDown}
            required
            className="url_input peer"
          />

          <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-green-700">
            ⏎
          </button>
        </form>

        {/* Browse URL History */}
        <div className="flex flex-col gap-1m max-h-60 overflow-y-auto">
          {allArticles.map((item, index) => {
            <div key={`link-${index}`} onClick={() => setArticle(item)} className="link_card">
              <div className="copy_btn">
                <img src={copy} alt="copy_icon" className="w-[40%] h-[40%] object-contain" />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">{item.url}</p>
            </div>;
          })}
        </div>
      </div>

      {/* Display Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <div>
            <img src={loader} alt="loader" className="w-50 h-50 object-contain" />
            <p className="font-inter text-gray-600 text-center">잠시만 기다려주세요</p>
          </div>
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            이런, 에러가 에러가 발생했어요!
            <br />
            <span className="font-satoshi font-normal text-gray-700">{error?.data?.error}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                요약된 <span className="blue_gradient text-2xl">기사</span> <span className="text-sm">영문만 지원</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
