import React, { VFC } from 'react';

type Props = {
  title: string;
  teamName: string;
  font: string;
};

export const StoryOgpTemplate: VFC<Props> = ({ title, teamName, font }) => {

  const getCss = (font: string) => `
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  @font-face {
    font-family: 'Noto Color Emoji';
    src: url(data:font/ttf;charset=utf-8;base64,${font}) format('truetype');
    }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  .wrapper {
    width: 1200px;
    height: 630px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-image: ${`url(${process.env.NEXT_PUBLIC_ROOT_URL}/images/story-ogp.png)`};
    background-size: cover;
    background-position: center center;
    font-family: 'Noto Sans JP', 'Noto Color Emoji', sans-serif;
  }
  .teamInfo {
    position: absolute;
    top: 40px;
    left: 80px;
    display: flex;
    align-items: center;
  }
  .teamName {
    font-size: 40px;
    font-weight: bold;
  }
  .title {
    font-size: 64px;
    line-height: 1.2;
    padding-left: 80px;
    padding-right: 80px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  `;
    

  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: getCss(font) }} />
      <body>
        <div className="wrapper">
          <div className="teamInfo">
            <p className="teamName">{teamName}</p>
          </div>
          <div className="title">
            {title}
          </div>
        </div>
      </body>
    </html>
  );
};
