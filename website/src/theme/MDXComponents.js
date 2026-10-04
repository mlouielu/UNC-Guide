// src/theme/MDXComponents.js
import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import YouTube from '@site/src/components/mdx/YouTube';
import RecentUpdates from '@theme/RecentUpdates';
import ThreadsEmbed from '@site/src/components/mdx/ThreadsEmbed';

export default {
  ...MDXComponents,
  YouTube,
  RecentUpdates,
  ThreadsEmbed,
};
