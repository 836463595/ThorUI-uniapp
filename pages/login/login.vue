<template>
	<view>
		<view style="height: 100rpx;"></view>
		<view style="width: 120rpx; margin: 0  auto;">
			<image src="../../static/img/logo2.png" mode="" class="tui-img"></image>
		</view>

		<view class="tui-form">
			<view class="tui-view-input">
				<!-- 				<view class="" style="color: #5677fc; margin: 0 auto; ">
					<text>加油站录入系统</text>
				</view> -->
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="mobile" color="#6d7a87" :size="20"></tui-icon>

						<input :adjust-position="false" :value="mobile" placeholder="请输入手机号" placeholder-class="tui-phcolor" type="number"
						 maxlength="11" @input="inputMobile" />
						<view class="tui-icon-close" v-show="mobile" @tap="clearInput(1)">
							<tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="pwd" color="#6d7a87" :size="20"></tui-icon>
						<input :adjust-position="false" :value="password" placeholder="请输入密码" :password="true" placeholder-class="tui-phcolor"
						 type="text" maxlength="36" @input="inputPwd" />
						<view class="tui-icon-close" v-show="password" @tap="clearInput(2)">
							<tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon>
						</view>
					</view>
				</tui-list-cell>
			</view>
			<view class="tui-btn-box">
				<tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle" @click="login">登录</tui-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mobile: '',
				password: '',
				createData: {} //用户初始化数据
			};
		},
		methods: {
			inputMobile(e) {
				this.mobile = e.detail.value;
			},
			inputPwd(e) {
				this.password = e.detail.value;
			},
			clearInput(type) {
				if (type == 1) {
					this.mobile = '';
				} else {
					this.password = '';
				}
			},
			login() {
				//假数据
				this.createData = {
					stationInfo: {
						stationName: "我的加油站",
						stationAddress: "我的地址",
						stationDistance: "123"
					},
					oilList: [{
						oilModel: "0#",
						guidancePrice: 5.52,
						stationPrice: 5.21
					}]
				}
				uni.navigateTo({
					url: `/pages/index/index?createData=${JSON.stringify(this.createData)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.tui-img {
		width: 120rpx;
		height: 120rpx;
	}

	.tui-form {
		padding-top: 50rpx;

		.tui-view-input {
			width: 100%;
			box-sizing: border-box;
			padding: 0 40rpx;

			.tui-cell-input {
				width: 100%;
				display: flex;
				align-items: center;
				padding-top: 48rpx;
				padding-bottom: $uni-spacing-col-base;

				input {
					flex: 1;
					padding-left: $uni-spacing-row-base;
				}

				.tui-icon-close {
					margin-left: auto;
				}
			}
		}

		.tui-cell-text {
			width: 100%;
			padding: $uni-spacing-col-lg $uni-spacing-row-lg;
			box-sizing: border-box;
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.tui-color-primary {
				color: $uni-color-primary;
			}
		}

		.tui-btn-box {
			width: 100%;
			padding: 0 $uni-spacing-row-lg;
			box-sizing: border-box;
			margin-top: 80rpx;
		}
	}
</style>
