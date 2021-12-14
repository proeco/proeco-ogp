import React, { VFC } from 'react';

type Props = {
  title: string;
  teamName: string;
};

const css = `
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
  background-image: url("https://proeco-ogp.vercel.app/images/story-ogp.png");
  background-size: cover;
  background-position: center center;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
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

export const StoryOgpTemplate: VFC<Props> = ({ title, teamName }) => {
  return (
    <html>
      <style dangerouslySetInnerHTML={{ __html: css }} />
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
