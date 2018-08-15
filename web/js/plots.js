"use strict";
export const Time = {
	trade:[],
	buy:[],
	sell:[],
	buysell:[]
};
export const layout = {
	yaxis:{
		domain:[0,0.4]		
	},

	yaxis2:{
		domain:[0.4,0.6]
	},
	yaxis3:{
		domain:[0.6,0.8],

	},
	yaxis4:{
		domain:[0.8,1],
	},
	datarevision:0
}
export const plots = {
	price:{
		trade:{
			x:Time.trade,
			y:[],
			legendgroup: 'a',
			name:'Price',
			yaxis:'y',
			hoverinfo:"y+name",
			line:{
				color:'black',
				width:2,
			}
		},
		average:{
			x:Time.trade,
			y:[],
			legendgroup: 'a',
			name:'Price average',
			yaxis:'y',
			hoverinfo:"y+name",
			line:{
				width:.5,
				color:'dodgerblue'
			}       
		},
		target:{
			//x:Time.buysell,
			x:Time.trade,
			y:[],
			legendgroup: 'a',
			name:'Profit line',
			yaxis:'y',
			hoverinfo:"y+name",
			line:{
				dash:'dot',
				//shape:'hv',
				width:0.5,
				color:'black'
			},
	
		},
		buy:{
			x:Time.buy,
			y:[],
			legendgroup: 'a',
			name:'Buy',
			yaxis:'y',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'lime'
			},
			line:{
				width:0
			}
		},
		sell:{
			x:Time.sell,
			y:[],
			legendgroup: 'a',
			name:'Sell',
			yaxis:'y',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'red'
			},
			line:{
				width:0
			}
		},
	},
	speed:{
		sellspeed:{
			x:Time.trade,
			y:[],
			legendgroup: 'b',
			name:'Sell speed',
			yaxis:'y2',
			line:{
				width:.5,
				opacity:.1,
				color:'red'
			},
			hoverinfo:"y+name" 		
		},
		buyspeed:{
			x:Time.trade,
			y:[],
			legendgroup: 'b',
			name:'Buy speed',
			yaxis:'y2',
			line:{
				width:.5,
				opacity:.1,
				color:'lime'
			},
			hoverinfo:"y+name" 		
		},
		frenzy:{
			x:Time.trade,
			y:[],
			legendgroup: 'b',
			name:'Frenzy',
			yaxis:'y2',
			line:{
				width:1,
				color:'black'
			},
			hoverinfo:"y+name" 		
		},

		buy:{
			x:Time.buy,
			y:[],
			legendgroup: 'b',
			showlegend: false,
			name:'Buy',
			yaxis:'y2',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'lime'
			},
			line:{
				width:0
			}
		},
		sell:{
			x:Time.sell,
			y:[],
			legendgroup: 'b',
			showlegend: false,
			name:'Sell',
			yaxis:'y2',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'red'
			},
			line:{
				width:0
			}
		},
	},
	sentiment:{
		bull_bear:{
			x:Time.trade,
			y:[],
			legendgroup: 'c',
			name:'Bull | Bear',
			yaxis:'y3',
			hoverinfo:"y+name",
			line:{
				color:'lime',
				width:1,
				shape:"line",
			}
		},
		momentum:{
			x:Time.trade,
			y:[],
			legendgroup: 'c',
			name:'momentum',
			yaxis:'y3',
			line:{
				width:.5,
				color:'red'
			},
			hoverinfo:"y+name"        
		},
		trend:{
			x:Time.trade,
			y:[],
			legendgroup: 'c',
			name:'Price trend',
			yaxis:'y3',
			hoverinfo:"y+name",
			line:{
				width:.5,
				color:'dodgerblue'
			}       
		},
		orders:{
			x:Time.trade,
			y:[],
			legendgroup: 'c',
			name:'Orders',
			yaxis:'y3',
			hoverinfo:"y+name",
			line:{
				width:.5,
				color:'gray'
			}       
		},
		buy:{
			x:Time.buy,
			y:[],
			legendgroup: 'c',
			showlegend: false,
			name:'Buy',
			yaxis:'y3',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'lime'
			},
			line:{
				width:0
			}
		},
		sell:{
			x:Time.sell,
			y:[],
			legendgroup: 'c',
			showlegend: false,
			name:'Sell',
			yaxis:'y3',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'red'
			},
			line:{
				width:0
			}
		},
	},
	weight:{

	},
	market:{
		inertia:{
			x:Time.trade,
			y:[],
			legendgroup: 'd',
			name:'inertia',
			yaxis:'y4',
			line:{
				width:1,
				color:'red'
			},
			hoverinfo:"y+name"        
		},
		
		resistance:{
			x:Time.trade,
			y:[],
			legendgroup: 'd',
			name:'Buy/Sell resistance point',
			yaxis:'y4',
			hoverinfo:"y+name",
			line:{
				dash:'dot',
				shape:'hv',
				width:0.5,
				color:'black'
			},
		},
	
		buy:{
			x:Time.buy,
			y:[],
			legendgroup: 'd',
			showlegend: false,
			name:'Buy',
			yaxis:'y4',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'lime'
			},
			line:{
				width:0
			}
		},
	
	
		sell:{
			x:Time.sell,
			y:[],
			legendgroup: 'd',
			showlegend: false,
			name:'Sell',
			yaxis:'y4',
			hoverinfo:"y+name",
			marker:{
				symbol:'circle',
				size:12,
				opacity:.8,
				color:'red'
			},
			line:{
				width:0
			}
		}
	}
}