<template>
	<div id="piaoMenu">
		<el-container style="height: 500px; border: 1px solid #eee">
		<el-header>
			<el-menu mode="horizontal" class="el-menu-vertical-demo" @select="didSelectMenu">
				<template v-for="(menu, index) in menuList">
					<el-submenu :index="index+''" v-if="menu.hasSubMenu">
						<template slot="title">{{ menu.menuTitle }}</template>
	                    <el-menu-item :index="subMe.menuIndex" v-for="(subMe, index) in menu.subMenu">
							{{ subMe.menuTitle }}
						</el-menu-item>
					</el-submenu>
					<el-menu-item :index="menu.menuIndex" v-if="!menu.hasSubMenu">
						{{ menu.menuTitle }}
					</el-menu-item>
				</template>
			</el-menu>
		</el-header>
		<el-main>
			<template>
				<el-table :data="newsList" stripe style="width: 100%">
					<el-table-column prop="newsTitle" label="最新文章" width="1000"></el-table-column>
					<el-table-column prop="updateTime" label="更新时间" width="180"></el-table-column>
				</el-table>
			</template>
		</el-main>
		<el-footer height="130px">
			<br/>
			<template v-for="(adver, index) in adList">
				<img v-bind:src="adver.adUrl" height="90" width="120"></img>
			</template>
		</el-footer>
	</el-container>
	</div>
</template>

<script>

export default {
	data() {
	    return {
	    	menuList: [
						{
							menuTitle:"首页",
							hasSubMenu: false,
							menuIndex: 0,
							subMenu:[]
						},
						{
							menuTitle:"菜品介绍",
							hasSubMenu: true,
							menuIndex: 1,
							subMenu:[
								{
									menuTitle:"啤酒下酒菜",
									menuIndex: 0,
									subMenu:[]
								},
								{
									menuTitle:"红酒下酒菜",
									menuIndex: 1,
									subMenu:[]
								},
								{
									menuTitle:"韩式家常菜",
									menuIndex: 2,
									subMenu:[]
								}
							]
						},
						{
							menuTitle:"酒类介绍",
							hasSubMenu: true,
							menuIndex: 2,
							subMenu:[
								{
									menuTitle:"啤酒",
									subMenu:[]
								},
								{
									menuTitle:"红酒",
									subMenu:[]
								},
								{
									menuTitle:"韩式烧酒",
									subMenu:[]
								}
							]
						},
						{
							menuTitle:"休闲游记",
							hasSubMenu: false,
							menuIndex: 3,
							subMenu:[]
						},
						{
							menuTitle:"关于",
							hasSubMenu: false,
							menuIndex: 4,
							subMenu:[]
						}
					],
			newsList: [
					{newsTitle: "标题0", updateTime:"2018-11-20"},
					{newsTitle: "标题1", updateTime:"2018-11-19"},
					{newsTitle: "标题2", updateTime:"2018-11-15"},
					{newsTitle: "标题3", updateTime:"2018-10-14"},
					{newsTitle: "标题4", updateTime:"2018-07-04"},
					{newsTitle: "标题5", updateTime:"2018-07-04"},
					{newsTitle: "标题6", updateTime:"2018-07-04"},
					{newsTitle: "标题7", updateTime:"2018-07-04"},
				],
			adList: [
					{adTitle:"广告0", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJrOM1HJpLZ19MVKBkrBNbObg4pe6WOSan8NpDWEEQtZnhZ5juxa37VP2u6ZppsTCtVGrCnmXdU48w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"},
					{adTitle:"广告1", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJrOM1HJpLZ19MVKBkrBNbObSnftqCHmaDLx5ZBJOZpGicpiaUsXn8DyxgV3c9FsMXibmUichj1HUNCqoA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"},
					{adTitle:"广告2", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJozdt6YOxbX7uyxoaXUNuiaZxlDrpHxYcqHczWbcJ6461adX5pOMiavHtCqMOckKnmv1SCZ5oicCwS6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"},
					{adTitle:"广告3", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJozdt6YOxbX7uyxoaXUNuiaZxlDrpHxYcqHczWbcJ6461adX5pOMiavHtCqMOckKnmv1SCZ5oicCwS6Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"},
					{adTitle:"广告4", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJrOM1HJpLZ19MVKBkrBNbObSnftqCHmaDLx5ZBJOZpGicpiaUsXn8DyxgV3c9FsMXibmUichj1HUNCqoA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"},
					{adTitle:"广告5", adUrl:"https://mmbiz.qpic.cn/mmbiz_jpg/BDxPBUfXwJrOM1HJpLZ19MVKBkrBNbObg4pe6WOSan8NpDWEEQtZnhZ5juxa37VP2u6ZppsTCtVGrCnmXdU48w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"}
				]
	    }
    
  	},
  	methods: {
      didSelectMenu(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}

</script>