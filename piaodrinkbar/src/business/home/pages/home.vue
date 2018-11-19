<template>
	<div id="piaoMenu">
		<el-container style="height: 500px; border: 1px solid #eee">
		<el-header>
			{{ header }}
			<el-menu mode="horizontal">
				<el-menu-item v-for="menu in menuList">
					{{ menu.menuTitle }}
				</el-menu-item>
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
	    	header: 'head area',
	    	mains: 'main area',
	    	footer: 'footer area',
	    	menuList: [
						{
							menuTitle:"首页",
							subMenu:[]
						},
						{
							menuTitle:"菜品介绍",
							subMenu:[
								{
									menuTitle:"啤酒下酒菜",
									subMenu:[]
								},
								{
									menuTitle:"红酒下酒菜",
									subMenu:[]
								},
								{
									menuTitle:"韩式家常菜",
									subMenu:[]
								}
							]
						},
						{
							menuTitle:"酒类介绍",
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
							subMenu:[]
						},
						{
							menuTitle:"关于",
							subMenu:[]
						}
					]
	    }
    
  	}
}

</script>