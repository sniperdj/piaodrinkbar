let newsList = [
					{newsTitle: "标题0", updateTime:"2018-11-20"},
					{newsTitle: "标题1", updateTime:"2018-11-19"},
					{newsTitle: "标题2", updateTime:"2018-11-15"},
					{newsTitle: "标题3", updateTime:"2018-10-14"},
					{newsTitle: "标题4", updateTime:"2018-07-04"}
				]

let menu = [
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