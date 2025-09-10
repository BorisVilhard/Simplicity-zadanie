import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	framework: '@storybook/nextjs',
	features: {
		experimentalRSC: true,
	},
};

export default config;
