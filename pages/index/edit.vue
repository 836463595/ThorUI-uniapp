<template>
	<view class="">
		<view class="tui-list-container">
			<tui-list-cell class="tui-list " :hover="false">
				<view class="flex flex-row">
					<view class="tui-list-cell-name ">型号</view>
					<input class="tui-right" type="number" v-model="oilList.oilModel" placeholder="输入型号" />
					<view class="caption">(例: 0#)</view>
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-list" :hover="false" size="26">
				<view class="flex flex-row">
					<view class="tui-list-cell-name">指导价</view>
					<input class="tui-right" type="number" v-model="oilList.guidancePrice" placeholder="输入指导价" />
					<view>￥</view>
				</view>
			</tui-list-cell>
			<tui-list-cell class="tui-list" :hover="false" size="26">
				<view class="flex flex-row">
					<view class="tui-list-cell-name">油站价</view>
					<input class="tui-right" type="number" v-model="oilList.stationPrice" placeholder="输入油站价" />
					<view>￥</view>
				</view>
			</tui-list-cell>
		</view>
		<view class="tui-btn-box">
			<tui-button :disabledGray="true" :shadow="true" shape="circle" @click="submit">提交</tui-button>
		</view>

		<!-- 提示 -->
		<tui-tips position="center" ref="toast"></tui-tips>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oilList: {
					oilModel: "",
					guidancePrice: "",
					stationPrice: ""
				},
				data: []
			}
		},
		onLoad(op) {
			if (op.oilList) {
				this.oilList = JSON.parse(op.oilList)
			}
			if (op.data) {
				JSON.parse(op.data).forEach(item => {
					this.data.push(item.oilModel)
				})
			}
		},
		methods: {
			verification() {
				if (this.oilList.oilModel == "") {
					let options = {
						msg: "油的型号不能为空",
						type: "translucent"
					};
					this.$refs.toast.showTips(options);
					return false;
				}
				if (this.oilList.guidancePrice == "") {
					let options = {
						msg: "油的指导价不能为空",
						type: "translucent"
					};
					this.$refs.toast.showTips(options);
					return false;
				}
				if (this.oilList.guidancePrice == "") {
					let options = {
						msg: "油的油站价不能为空",
						type: "translucent"
					};
					this.$refs.toast.showTips(options);
					return false;
				}
				return true;
			},
			submit() {
				if (this.verification()) {
					let res = this.data.includes(this.oilList.oilModel)
					if (res) {
						let options = {
							msg: "不能添加同一种型号",
							type: "translucent"
						};
						this.$refs.toast.showTips(options);
					} else {
						uni.$emit("oilModelData", {
							oilModelData: JSON.stringify(this.oilList),
						});
						uni.navigateBack();
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.tui-list-container {
		padding-top: 20rpx;
		// padding-bottom: 76rpx;
	}

	.tui-list {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.tui-list-cell-name {
		width: 200rpx;
	}

	.tui-right {
		flex: 1;
		color: $uni-text-color;
		font-size: $uni-font-size-base;
	}

	.tui-btn-box {
		width: 65%;
		padding: 0 $uni-spacing-row-lg;
		box-sizing: border-box;
		position: fixed;
		bottom: 10rpx;
		left: 17%;
	}
</style>
