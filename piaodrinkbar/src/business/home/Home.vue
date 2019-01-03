<template>
    <el-container>
        <el-header>
            <el-menu mode="horizontal">
                <el-menu-item v-for="menu in menuList" :index="menu.menuIndex" :key="menu.menuIndex">
                    {{ menu.menuTitle }}
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>main</el-main>
        <el-footer>footer</el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex:"1",
            menuList:[
				{
					menuTitle:"首页",
					hasSubMenu: false,
					menuIndex: "0",
					subMenu:[]
				},
				{
					menuTitle:"菜品介绍",
					hasSubMenu: true,
					menuIndex: "1",
					subMenu:[
						{
							menuTitle:"啤酒下酒菜",
							menuIndex: "0",
							subMenu:[]
						},
						{
							menuTitle:"红酒下酒菜",
							menuIndex: "1",
							subMenu:[]
						},
						{
							menuTitle:"韩式家常菜",
							menuIndex: "2",
							subMenu:[]
						}
					]
				},
				{
					menuTitle:"酒类介绍",
					hasSubMenu: true,
					menuIndex: "2",
					subMenu:[
						{
							menuTitle:"啤酒",
							menuIndex: "0",
							subMenu:[]
						},
						{
							menuTitle:"红酒",
							menuIndex: "1",
							subMenu:[]
						},
						{
							menuTitle:"韩式烧酒",
							menuIndex: "2",
							subMenu:[]
						}
					]
				},
				{
					menuTitle:"休闲游记",
					hasSubMenu: false,
					menuIndex: "3",
					subMenu:[]
				},
				{
					menuTitle:"关于",
					hasSubMenu: false,
					menuIndex: "4",
					subMenu:[]
				}
			]
        }
    },
    created() {
        
    },
    methods: {
        handleSelect: function() {
            console.log(this.activeIndex)
        }
    },
}
</script>

<style scoped>

</style>

