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
  background-image: ${`url(${process.env.NEXT_PUBLIC_ROOT_URL}/images/story-ogp.png)`};
  background-size: cover;
  background-position: center center;
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
}
.title {
  padding-left: 80px;
  padding-right: 80px;
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
