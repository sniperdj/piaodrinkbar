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
			{{ mains }}
		</el-main>
		<el-footer>
			{{ footer }}
		</el-footer>
	</el-container>
	</div>
</template>

<script>

export default {
	data() {
	    return {
	    	mains: 'main area',
	    	footer: 'footer area',
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