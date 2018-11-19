<template>
	<el-container style="height: 500px; border: 1px solid #eee">
		<el-header>
			<el-menu mode="horizontal">
				<el-menu-item index="0">首页</el-menu-item>
				<el-submenu index="1">
					<template slot="title">菜品介绍</template>
					<el-menu-item index="1-0">啤酒下酒菜</el-menu-item>
					<el-menu-item index="1-1">红酒下酒菜</el-menu-item>	
					<el-menu-item index="1-2">韩式家常菜</el-menu-item>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title">酒类介绍</template>
					<el-menu-item index="2-0">啤酒</el-menu-item>
					<el-menu-item index="2-1">红酒</el-menu-item>	
					<el-menu-item index="2-2">烧酒</el-menu-item>
				</el-submenu>
				<el-menu-item index="3">休闲游记</el-menu-item>
				<el-menu-item index="4">关于</el-menu-item>
			</el-menu>
		</el-header>
		<el-main>
			{{ mains }}
		</el-main>
		<el-footer>
			{{ footer }}
		</el-footer>
	</el-container>
</template>

<script>

export default {
	name:'Home',
	data() {
	    return {
	    	mains: 'main area',
	    	footer: 'footer area'
	    }
    
  	}
}

</script>