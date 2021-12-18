import type { NextApiRequest, NextApiResponse } from 'next';
import * as playwright from 'playwright-aws-lambda';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StoryOgpTemplate } from '../../../components/StoryOgpTemplate';

const getOgp = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, teamName, teamIconUrl } = req.query;
  const viewport = { width: 1200, height: 630 };

  try {
    const browser = await playwright.launchChromium();

    const page = await browser.newPage({ viewport });

    const props = { title: title as string, teamName: teamName as string, teamIconUrl: teamIconUrl as string };
    const element = React.createElement(StoryOgpTemplate, props);
    const markup = ReactDOMServer.renderToStaticMarkup(element);
    const html = `<!doctype html>${markup}`;

    await page.setContent(html, { waitUntil: 'load' });

    const image = await page.screenshot({ type: 'png' });
    await browser.close();

    res.setHeader('Cache-Control', 's-maxage=31536000, stale-while-revalidate');

    res.setHeader('Content-Type', 'image/png');

    res.end(image);
  } catch (error) {
    console.error('[Error]: ', error);
    res.status(404).json({ message: 'Cannot render og-image' });
  }
};

export default getOgp;
