<template>
	<view class="uni-section" nvue>
		<view v-if="type" class="uni-section__head">
			<view :class="type" class="uni-section__head-tag" />
		</view>
		<view class="uni-section__content flex-1">
			<text v-if="title" :class="{'distraction':!subTitle}" class="uni-section__content-title">{{ title }}</text>
			<text v-if="subTitle" class="uni-section__content-sub">{{ subTitle }}</text>
		</view>
		<slot />
	</view>
</template>

<script>
	/**
	 * Section 标题栏
	 * @description 标题栏
	 * @property {String} type = [line|circle] 标题装饰类型
	 * 	@value line 竖线
	 * 	@value circle 圆形
	 * @property {String} title 主标题
	 * @property {String} subTitle 副标题
	 */

	export default {
		name: 'UniTitle',
		props: {
			type: {
				type: String,
				default: ''
			},
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		watch: {
			title(newVal) {
				if (uni.report && newVal !== '') {
					uni.report('title', newVal)
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			}
		}
	}
</script>
<style scoped lang="scss">
	.uni-section {
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		/* margin-top: 20rpx; */
		flex-direction: row;
		align-items: center;
		padding: 0 20rpx;
		height: 100rpx;
		background-color: $uni-bg-color-grey;
		/* #ifdef APP-NVUE */
		/* border-bottom-color: #e5e5e5;
		border-bottom-style: solid;
		border-bottom-width: 0.5px; */
		/* #endif */
		font-weight: normal;
	}

	/* #ifndef APP-NVUE */
	/* .uni-section:after {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		height: 1rpx;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #e5e5e5;
	} */

	/* #endif */

	.uni-section__head {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}

	.line {
		height: 30rpx;
		background-color: $uni-color-primary;
		border-radius: 10rpx;
		width: 8rpx;
	}

	.circle {
		width: 16rpx;
		height: 16rpx;
		border-top-right-radius: 100rpx;
		border-top-left-radius: 100rpx;
		border-bottom-left-radius: 100rpx;
		border-bottom-right-radius: 100rpx;
		background-color: $uni-color-primary;
	}

	.uni-section__content {
		flex: 1;
		color: $uni-color-title;
	}

	.uni-section__content-title {
		font-size: $uni-font-size-base;
		color: $uni-color-title;
	}

	.distraction {
		flex-direction: row;
		align-items: center;
	}

	.uni-section__content-sub {
		font-size: $uni-font-size-sm;
		color: $uni-color-subtitle;
	}
</style>