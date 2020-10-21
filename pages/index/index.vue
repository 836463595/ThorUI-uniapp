<template>
	<view>
		<view class="content">
			<view style="position: relative;">
				<uni-section class="bg-page" type="line" title="基础信息"></uni-section>
				<!-- <tui-tag shape="circle" type="light-blue" @click="locationDetail" class="edit-btn fs-20">获取定位</tui-tag> -->
				<!-- <text class="edit-btn caption" @click="locationDetail">获取定位</text> -->
				<tui-icon name="location" color="#6d7a87" :size="18" class="edit-btn " @click="locationDetail"></tui-icon>
				<tui-list-cell :hover="false" :last="true">
					<view class="flex flex-row">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">油站名称</text>
						<view class="tui-right" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">{{ stationInfo.stationName}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :last="true">
					<view class="flex flex-row">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">油站地址</text>
						<view class="tui-right" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">{{ stationInfo.stationAddress}}</view>
					</view>
				</tui-list-cell>
				<tui-list-cell :hover="false" :last="true">
					<view class="flex flex-row">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">油站距离</text>
						<view class="tui-right" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">{{ stationInfo.stationDistance}}</view>
						<view class="ml-1 " v-if="isShow" style="color: #7a7a7a;">km</view>
					</view>
				</tui-list-cell>
			</view>

			<view style="position: relative;">
				<uni-section class="bg-page" type="line" title="油号信息"></uni-section>
				<!-- <text class="edit-btn caption" @click="add">添加型号</text> -->
				<!-- <tui-tag shape="circle" type="light-blue" @click="add" class="edit-btn ">添加型号</tui-tag> -->
				<tui-icon name="add" color="#6d7a87" :size="18" class="edit-btn "  @click="add"></tui-icon>
				<view style="height: 20rpx;"></view>
				<tui-list-cell :hover="false" :last="true" v-for="(item,index) in oilList" :key="index" @click="edit(index)">
					<view class="flex flex-row">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">型号</text>
						<view class="ml-5" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">{{item.oilModel}}</view>
						<text class="tui-list-cell-name ml-10" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">指导价</text>
						<view class="ml-5" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">￥{{item.guidancePrice}}</view>
						<text class="tui-list-cell-name ml-10" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">油站价</text>
						<view class="ml-5" :style="{color: !isFirst ? '#333333' : '#7a7a7a'}">￥{{item.stationPrice}}</view>
						<view class=" tui-right del" @tap.stop="stopSwith">
							<tui-icon name="close" color="#6d7a87" :size="18" @click="oilDel(index)" class="mr-5"></tui-icon>
						</view>
					</view>
				</tui-list-cell>
			</view>

			<view style="position: relative;">
				<uni-section class="bg-page" type="line" title="其他信息"></uni-section>
				<text class="edit-btn caption">(图片上传成功后若想更改，需重新上传)</text>

				<tui-list-cell :hover="false">
					<view class="flex flex-row mb-10">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">油站商标</text>
					</view>
					<view>
						<tui-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove" :limit="1"></tui-upload>
					</view>
				</tui-list-cell>

				<tui-list-cell :hover="false" >
					<view class="flex flex-row mb-10">
						<text class="tui-list-cell-name" :style="{color: isFirst ? '#333333' : '#7a7a7a'}">营业资质</text>
					</view>
					<view class=" tui-item-box ">
						<tui-upload :value="value1" :serverUrl="serverUrl" @complete="result1" @remove="remove1" :limit="3"></tui-upload>
					</view>
				</tui-list-cell>
			</view>
			
			<view style="height: 130rpx;"></view>
		</view>


		<view class="tui-btn-box">
			<tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle" @click="Submit">提交</tui-button>
		</view>
		<!-- 提示 -->
		<tui-tips position="center" ref="toast"></tui-tips>

	</view>
</template>

<script>
	import uniSection from '@/components/uni-ui/uni-section/uni-section.vue'
	export default {
		components: {
			uniSection
		},
		data() {
			return {
				stationInfo: {}, //表单数据
				oilList: [], //油型号列表
				guidancePrice: "", //指导价
				stationPrice: "", //油站价
				isEduit: false, //是否编辑
				oilIndex: 0,
				isFirst: true,
				isShow: false,
				//资质
				imageData1: [],
				serverUrl1: "", //上传地址
				value1: [] ,//初始化图片
				//logo
				imageData: [],
				serverUrl: "", //上传地址
				value: [], //初始化图片
			}
		},
		onLoad(op) {
			//初始化用户信息
			if (op.createData) {
				if (JSON.parse(op.createData).oilList) {
					this.isShow = true
				}
				this.oilList = JSON.parse(op.createData).oilList
				this.stationInfo = JSON.parse(op.createData).stationInfo
			}
			//油型号信息
			uni.$on("oilModelData", (options) => {
				if (!this.isEduit) {
					this.oilList.push(JSON.parse(options.oilModelData))
				} else {
					this.oilList[this.oilIndex].oilModel = JSON.parse(options.oilModelData).oilModel
					this.oilList[this.oilIndex].guidancePrice = JSON.parse(options.oilModelData).guidancePrice
					this.oilList[this.oilIndex].stationPrice = JSON.parse(options.oilModelData).stationPrice
				}
			})
			//油站信息
			uni.$on("locationData", (options) => {
				this.isShow = true
				this.stationInfo.stationName = JSON.parse(options.locationData).selectTitle
				this.stationInfo.stationAddress = JSON.parse(options.locationData).selectAdress
				this.stationInfo.stationDistance = JSON.parse(options.locationData).selectDistance
			})
		},
		methods: {
			result(e) {
				this.imageData = e.imgArr;
			},
			remove(e) {
				//移除图片
				let index = e.index
			},
			result1(e) {
				this.imageData1 = e.imgArr;
			},
			remove1(e) {
				//移除图片
				let index = e.index
			},
			locationDetail() {
				uni.navigateTo({
					url: "/pages/index/maps"
				})
			},
			//删除油号信息
			oilDel(index) {
				this.oilList.splice(index, 1);
			},
			//添加油号信息
			add() {
				uni.navigateTo({
					url: `/pages/index/edit?data=${JSON.stringify(this.oilList)}`
				})
			},
			//编辑油号信息
			edit(index) {
				this.oilIndex = index
				this.isEduit = true;
				uni.navigateTo({
					url: `/pages/index/edit?oilList=${JSON.stringify(this.oilList[index])}`
				})
			},
			stopSwith(e) {
				e.stopPropagation()
			},

		}
	}
</script>

<style lang="scss">
	.tui-upload-box {
		flex-wrap: nowrap !important;
	}

	.content {
		width: 100%;
		height: 660px;
		overflow-y: visible;
	}

	.edit-btn {
		position: absolute;
		right: 20rpx;
		top: 36rpx;
		z-index: 999;
	}

	.tui-btn-box {
		width: 65%;
		position: fixed;
		bottom: 10rpx;
		left: 17%;
	}

	.tui-list-cell-name {
		color: $uni-text-color-grey;
	}

	.tui-right {
		margin-left: auto;
		margin-right: 0;
		color: $uni-text-color;
		max-width: 540rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.del {
		position: absolute;
		right: 0;
		margin-right: 18rpx;
	}

	.delete-icon {
		position: absolute;
		top: 0rpx;
		right: 20rpx;
		z-index: 99;
	}

	.tui-item-box {
		width: 100%;
		display: flex;
		align-items: center;
	}
</style>
