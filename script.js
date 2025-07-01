const washroomConstants = [
    {
        floor:1,
        gender:"m",
        room:168,
        offset: [1710,490],
        start:[10,0],
        path: [
            [75,10],
            [65,110],
            [0,105]
        ]
    },
    {
        floor:1,
        gender:"a",
        room:150,
        offset: [785,320],
        start:[0,0],
        path: [
            [40,0],
            [40,45],
            [0,45]
        ]
    },
    {
        floor:2,
        gender:"f",
        room:241,
        offset: [295,310],
        start:[40,0],
        path: [
            [75,0],
            [75,125],
            [0,125],
            [0,35],
            [40,35]
        ]
    },
    {
        floor:2,
        gender:"a",
        room:280,
        offset: [1640,1025],
        start:[5,0],
        path: [
            [60,5],
            [55,45],
            [0,40]
        ]
    },
    {
        floor:2,
        gender:"m",
        room:265,
        offset: [1580,640],
        start:[40,0],
        path: [
            [65,5],
            [45,125],
            [0,125],
            [0,45],
            [35,50]
        ]
    },
    {
        floor:2,
        gender:"a",
        room:201,
        offset: [2235,1120],
        start:[10,0],
        path: [
            [85,5],
            [75,115],
            [0,110]
        ]
    },
    

    {
        floor:3,
        gender:"f",
        room:348,
        offset: [295,310],
        start:[40,0],
        path: [
            [75,0],
            [75,125],
            [0,125],
            [0,35],
            [40,35]
        ]
    },
    {
        floor:3,
        gender:"b",
        room:360,
        offset: [790,310],
        start:[40,0],
        path: [
            [75,0],
            [75,125],
            [0,125],
            [0,35],
            [40,35]
        ]
    },
    {
        floor:3,
        gender:"a",
        room:374,
        offset: [1570,715],
        start:[0,0],
        path: [
            [60,0],
            [50,50],
            [0,50]
        ]
    },

]

async function drawFirstFloor(){
    elm = document.getElementById('map1')

    ctx = elm.getContext("2d")

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(2140, 1405)
    ctx.lineTo(2180, 1025)
    ctx.lineTo(1700, 985)
    ctx.lineTo(1690, 1080)
    ctx.lineTo(1885, 1100)
    ctx.lineTo(1860, 1380)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 20


    ctx.fillStyle = "lightgray"


    ctx.closePath()

    ctx.stroke()

    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(87, 730)
    ctx.lineTo(165, 730)
    ctx.lineTo(165, 695)
    ctx.lineTo(230, 695)
    ctx.lineTo(230, 110)
    ctx.lineTo(300, 110)
    ctx.lineTo(300, 255)
    ctx.lineTo(670, 255)
    ctx.lineTo(670, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 255)
    ctx.lineTo(1170, 255)
    ctx.lineTo(1170, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 255)
    ctx.lineTo(1360, 255)
    ctx.lineTo(1360, 575)
    ctx.lineTo(1620, 575)
    ctx.lineTo(1640, 380)
    ctx.lineTo(1820, 400)
    ctx.lineTo(1815, 435)
    ctx.lineTo(1700, 425)
    ctx.lineTo(1680, 590)
    ctx.lineTo(2735, 695)
    ctx.lineTo(2730, 760)
    ctx.lineTo(2280, 715)
    ctx.lineTo(2225, 1245)
    ctx.lineTo(2395, 1265)
    ctx.lineTo(2375, 1435)
    ctx.lineTo(2330, 1430)
    ctx.lineTo(2345, 1290)
    ctx.lineTo(2150, 1270)
    ctx.lineTo(2215, 700)
    ctx.lineTo(1685, 650)
    ctx.lineTo(1635, 990)
    ctx.lineTo(1590, 985)
    ctx.lineTo(1640, 640)
    ctx.lineTo(1555, 640)
    ctx.lineTo(1555, 620)
    ctx.lineTo(1350, 620)
    ctx.lineTo(1350, 745)
    ctx.lineTo(1410, 745)
    ctx.lineTo(1410, 785)
    ctx.lineTo(1350, 785)
    ctx.lineTo(1350, 1135)

    ctx.lineTo(1230, 1135)
    ctx.lineTo(1230, 1090)
    ctx.lineTo(1310, 1090)
    ctx.lineTo(1310, 320)
    ctx.lineTo(785, 320)
    ctx.lineTo(785, 440)
    ctx.lineTo(750, 440)
    ctx.lineTo(750, 920)
    ctx.lineTo(710, 920)
    ctx.lineTo(710, 600)
    ctx.lineTo(290, 600)
    ctx.lineTo(290, 880)
    ctx.lineTo(230, 880)
    ctx.lineTo(230, 830)
    ctx.lineTo(165, 830)
    ctx.lineTo(165, 800)
    ctx.lineTo(80, 800)

    ctx.closePath()

    ctx.fillStyle = "white"
    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(295, 315)
    ctx.lineTo(680, 315)
    ctx.lineTo(680, 440)
    ctx.lineTo(710, 440)
    ctx.lineTo(710, 575)
    ctx.lineTo(295, 575)

    ctx.closePath()

    ctx.fillStyle = "lightgray"

    ctx.fill()
    

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(2140, 1405)
    ctx.lineTo(2180, 1025)
    ctx.lineTo(1700, 985)
    ctx.lineTo(1690, 1080)
    ctx.lineTo(1885, 1100)
    ctx.lineTo(1860, 1380)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 15


    ctx.closePath()

    ctx.stroke()

}

async function drawSecondFloor(){
    elm = document.getElementById('map2')

    ctx = elm.getContext("2d")

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 20


    ctx.fillStyle = "lightgray"


    ctx.closePath()

    ctx.stroke()

    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(95, 640)
    ctx.lineTo(230, 640)
    ctx.lineTo(230, 110)
    ctx.lineTo(300, 110)
    ctx.lineTo(300, 255)
    ctx.lineTo(1170, 255)
    ctx.lineTo(1170, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 440)
    ctx.lineTo(1360, 440)
    ctx.lineTo(1360, 575)
    ctx.lineTo(1630, 575)
    ctx.lineTo(1650, 430)
    ctx.lineTo(1695, 435)
    ctx.lineTo(1680, 590)
    ctx.lineTo(2795, 695)
    ctx.lineTo(2790, 760)
    ctx.lineTo(2760, 755)
    ctx.lineTo(2760, 735)
    ctx.lineTo(2680, 725)
    ctx.lineTo(2678, 740)
    ctx.lineTo(2280, 705)
    ctx.lineTo(2225, 1245)
    ctx.lineTo(2360, 1260)
    ctx.lineTo(2355, 1310)
    ctx.lineTo(1550, 1230)
    ctx.lineTo(1590, 970)
    ctx.lineTo(1675, 975)
    ctx.lineTo(1650, 970)
    ctx.lineTo(1640, 1080)
    ctx.lineTo(1630, 1185)
    ctx.lineTo(2170, 1240)
    ctx.lineTo(2225, 700)
    ctx.lineTo(1725, 650)
    ctx.lineTo(1675, 975)//
    ctx.lineTo(1590, 970)//
    ctx.lineTo(1640, 640)
    ctx.lineTo(1555, 640)
    ctx.lineTo(1555, 620)
    ctx.lineTo(1310, 620)
    ctx.lineTo(1310, 470)
    ctx.lineTo(1170, 470)
    ctx.lineTo(1170, 320)
    ctx.lineTo(785, 320)
    ctx.lineTo(785, 440)
    ctx.lineTo(750, 440)
    ctx.lineTo(750, 1065)
    ctx.lineTo(710, 1065)
    ctx.lineTo(710, 600)
    ctx.lineTo(290, 600)
    ctx.lineTo(290, 880)
    ctx.lineTo(95, 880)
    ctx.lineTo(95, 830)
    ctx.lineTo(230, 830)
    ctx.lineTo(230, 700)
    ctx.lineTo(95, 700)

    ctx.closePath()

    ctx.fillStyle = "white"
    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(295, 315)
    ctx.lineTo(680, 315)
    ctx.lineTo(680, 440)
    ctx.lineTo(710, 440)
    ctx.lineTo(710, 700)
    ctx.lineTo(295, 700)

    ctx.closePath()

    ctx.fillStyle = "lightgray"

    ctx.fill()
    

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 20


    ctx.fillStyle = "lightgray"


    ctx.closePath()

    ctx.stroke()
}

async function drawThirdFloor(){
    elm = document.getElementById('map3')

    ctx = elm.getContext("2d")

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 20


    ctx.fillStyle = "lightgray"


    ctx.closePath()

    ctx.stroke()

    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(230, 695)
    ctx.lineTo(230, 110)
    ctx.lineTo(300, 110)
    ctx.lineTo(300, 255)
    ctx.lineTo(670, 255)
    ctx.lineTo(790, 255)
    ctx.lineTo(1170, 255)
    ctx.lineTo(1170, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 440)
    ctx.lineTo(1360, 440)
    ctx.lineTo(1360, 575)
    ctx.lineTo(1630, 575)
    ctx.lineTo(1655, 310)
    ctx.lineTo(1995, 345)
    ctx.lineTo(2000, 310)
    ctx.lineTo(2080, 320)
    ctx.lineTo(2075, 350)
    ctx.lineTo(2055, 350)
    ctx.lineTo(2045, 450)
    ctx.lineTo(2710, 515)
    
    
    ctx.lineTo(2695, 740)
    ctx.lineTo(2280, 705)
    ctx.lineTo(2240, 1110)
    ctx.lineTo(2180, 1105)
    ctx.lineTo(2190, 1030)
    ctx.lineTo(2110, 1020)
    ctx.lineTo(2130, 910)
    ctx.lineTo(2200, 920)
    ctx.lineTo(2225, 700)
    ctx.lineTo(1725, 650)
    ctx.lineTo(1640, 640)
    ctx.lineTo(1630, 720)
    ctx.lineTo(1610, 720)
    ctx.lineTo(1620, 640)
    ctx.lineTo(1555, 640)
    ctx.lineTo(1555, 620)
    ctx.lineTo(1310, 620)
    ctx.lineTo(1310, 470)
    ctx.lineTo(1170, 470)
    ctx.lineTo(1170, 320)
    ctx.lineTo(785, 320)
    ctx.lineTo(785, 440)
    ctx.lineTo(750, 440)
    ctx.lineTo(750, 1065)
    ctx.lineTo(710, 1065)
    ctx.lineTo(710, 600)
    ctx.lineTo(290, 600)
    ctx.lineTo(290, 880)
    ctx.lineTo(230, 880)
    ctx.lineTo(230, 830)

    ctx.closePath()

    ctx.fillStyle = "white"
    ctx.fill()

    //hallways

    ctx.beginPath()

    ctx.moveTo(295, 315)
    ctx.lineTo(680, 315)
    ctx.lineTo(680, 440)
    ctx.lineTo(800, 440)
    ctx.lineTo(800, 1200)
    ctx.lineTo(295, 1200)

    ctx.closePath()

    ctx.fillStyle = "lightgray"

    ctx.fill()

    //

    ctx.beginPath()

    ctx.moveTo(1700, 360)
    ctx.lineTo(2000, 390)
    ctx.lineTo(1980, 620)
    ctx.lineTo(1680, 590)

    ctx.closePath()

    ctx.fillStyle = "lightgray"

    ctx.fill()

    //

    ctx.beginPath()

    ctx.moveTo(2040, 490)
    ctx.lineTo(2670, 550)
    ctx.lineTo(2660, 680)
    ctx.lineTo(2030, 620)

    ctx.closePath()

    ctx.fillStyle = "lightgray"

    ctx.fill()
    

    //draw outline
    ctx.beginPath()
    

    ctx.moveTo(87, 740)
    ctx.lineTo(87, 690)
    ctx.lineTo(108, 690)
    ctx.lineTo(108, 125)
    ctx.lineTo(230, 125)
    ctx.lineTo(230, 110)
    ctx.lineTo(295, 110)
    ctx.lineTo(295, 140)
    ctx.lineTo(675, 140)
    ctx.lineTo(675, 110)
    ctx.lineTo(790, 110)
    ctx.lineTo(790, 140)
    ctx.lineTo(1165, 140)
    ctx.lineTo(1165, 110)
    ctx.lineTo(1230, 110)
    ctx.lineTo(1230, 140)
    ctx.lineTo(1355, 140)
    ctx.lineTo(1355, 440)
    ctx.lineTo(1450, 440)
    ctx.lineTo(1450, 140)
    ctx.lineTo(1675, 140)
    ctx.lineTo(1670, 185)
    ctx.lineTo(2070, 225)
    ctx.lineTo(2068, 240)
    ctx.lineTo(2125, 245)
    ctx.lineTo(2115, 365)
    ctx.lineTo(2830, 435)
    ctx.lineTo(2790, 770)
    ctx.lineTo(2775, 768)
    ctx.lineTo(2765, 885)
    ctx.lineTo(2835, 890)
    ctx.lineTo(2775, 1475)
    ctx.lineTo(1530, 1350)
    ctx.lineTo(1520, 1400)
    ctx.lineTo(100,1400)
    ctx.lineTo(100, 830)
    ctx.lineTo(95, 830)
    ctx.lineTo(87, 830)
    ctx.lineTo(87,740)

    
    ctx.lineWidth = 20


    ctx.fillStyle = "lightgray"


    ctx.closePath()

    ctx.stroke()
}


async function drawWashroomLocations(){
    const floorNames = ['firstfloor','secondfloor','thirdfloor']
    i = 0
    while(i<washroomConstants.length){
        
        newParentCont = document.createElement('div')
        newParentCont.style.position = 'absolute'
        newParentCont.style.zIndex = '5'
        newParentCont.style.left = `${washroomConstants[i].offset[0]}px`
        newParentCont.style.top = `${washroomConstants[i].offset[1]}px`

        newCanvas = document.createElement('canvas')

        //console.log(newCanvas)

        newCanvas.width = 200
        newCanvas.height = 200

        document.getElementById(floorNames[(washroomConstants[i].floor)-1]).appendChild(newParentCont)

        ctj = newCanvas.getContext('2d')
        //console.log(ctj)

        ctj.beginPath()

        
        ctj.moveTo(washroomConstants[i].start[0], washroomConstants[i].start[1])
        j = 0
        while(j<washroomConstants[i].path.length){
            //console.log(washroomConstants[i].path[j][0],washroomConstants[i].path[j][1])
            ctj.lineTo(washroomConstants[i].path[j][0],washroomConstants[i].path[j][1])
            j++
        }

        ctj.closePath()

        ctj.fillStyle = 'black'

        ctj.fill()

        ctj.fillStyle = 'red'
        ctj.font = "40px Arial";
        ctj.fillText(washroomConstants[i].room,10,60);

        newCanvas.setAttribute('onclick', `zoomFr(${washroomConstants[i].room})`)

        newParentCont.appendChild(newCanvas)

        //console.log(document.getElementById(floorNames[(washroomConstants[i].floor)-1]))

        i++
    }
}

async function zoomFr(wre){
    wrindex = -1
    wr = false


    b = 0
    while(b<washroomConstants.length){
        if(washroomConstants[b].room == wre){
            wrindex = b
            wr = washroomConstants[b]
        }
        b++
    }
    if(!wr || wrindex==-1)return console.log('nothingfound')

    showFloor(wr.floor)
    setupMapContainer(3, [wr.offset[0],wr.offset[1]])
}

async function setupMapContainer(zoomlevel, shift){
    document.getElementById('mapparentshift').style.transform = ""
    document.getElementById('mapcont').style.transform = ""


    console.log(shift)
    mapcontdim = [2990,1600]

    width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    width -= 80

    scaleFactor = width/mapcontdim[0]

    document.getElementById('mapwrapper').style.height = mapcontdim[1]*scaleFactor+"px"

    document.getElementById('mapcont').style.transform = `scale(${scaleFactor*(((zoomlevel)||1))})`

    if(shift) {
        document.getElementById('mapparentshift').style.transform = `translate(-${(shift[0]-width/2)}px,-${(shift[1]-(mapcontdim[1]*scaleFactor/2))}px)`
        console.log(`translate(-${(shift[0]-width/2)}px,-${(shift[1]-(mapcontdim[1]*scaleFactor/2))}px)`)
    }
}

async function showFloor(floor){
    contp = document.getElementById('mapparentshift')

    l = 0
    while(l<contp.children.length){
        contp.children[l].style.display = "none"

        if(l+1==floor){
            contp.children[l].style.display = "block"
        }
        l++
    }

    setupMapContainer()
}

async function setupWrFocusButtons(){
    
    elema = document.getElementById('wrbtns')

    p = 0
    while(p<washroomConstants.length){
        nb = document.createElement("button")

        nb.innerHTML = washroomConstants[p].room

        nb.setAttribute('onclick', `zoomFr(${washroomConstants[p].room})`)

        elema.appendChild(nb)
        p++
    }
}

drawFirstFloor()
drawSecondFloor()
drawThirdFloor()

drawWashroomLocations()

setupMapContainer()

setupWrFocusButtons()