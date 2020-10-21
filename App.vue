<script>
	// import pageAnimation from '@/components/page-animation'
	export default {
		// mixins: [pageAnimation],
		globalData: {
			text: "text",
			$store: null,
			store: {}
		},
		onLaunch: function() {
			console.log("App Launch");
		},
		onShow: function() {
			console.log("App Show");
		},
		onHide: function() {
			console.log("App Hide");
		}
	};
</script>

<style lang="scss">
	@import "./styles/common.scss";

	.flex {
		display: flex;
	}

	.col-1,
	.col-2,
	.col-3,
	.col-4,
	.col-5,
	.col-6,
	.col-7,
	.col-8,
	.col-9,
	.col-10,
	.col-11,
	.col-12 {
		position: relative;
		padding-right: 20rpx;
		padding-left: 20rpx;
	}

	.col-12 {
		width: 750rpx;
	}

	.col-11 {
		width: 687.5rpx;
	}

	.col-10 {
		width: 625rpx;
	}

	.col-9 {
		width: 562.5rpx;
	}

	.col-8 {
		width: 500rpx;
	}

	.col-7 {
		width: 437.5rpx;
	}

	.col-6 {
		width: 375rpx;
	}

	.col-5 {
		width: 312.5rpx;
	}

	.col-4 {
		width: 250rpx;
	}

	.col-3 {
		width: 187.5rpx;
	}

	.col-2 {
		width: 125rpx;
	}

	.col-1 {
		width: 62.5rpx;
	}
</style>
