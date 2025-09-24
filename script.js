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
        gender:"f",
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
        gender:"m",
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
        room:372,
        offset: [1570,650],
        start:[5,0],
        path: [
            [48,0],
            [43,35],
            [0,35]
        ]
    },
    {
        floor:3,
        gender:"f",
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

    
    ctx.lineWidth = 20


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

        minx = 100000
        maxx = -100000
        miny = 100000
        maxy = -100000

        while(j<washroomConstants[i].path.length){
            if(minx>washroomConstants[i].path[j][0]) minx = washroomConstants[i].path[j][0]
            if(maxx<washroomConstants[i].path[j][0]) maxx = washroomConstants[i].path[j][0]
            if(miny>washroomConstants[i].path[j][1]) miny = washroomConstants[i].path[j][1]
            if(maxy<washroomConstants[i].path[j][1]) maxy = washroomConstants[i].path[j][1]

            ctj.lineTo(washroomConstants[i].path[j][0],washroomConstants[i].path[j][1])
            j++
        }

        ctj.closePath()

        middlex = (minx+maxx)/2
        middley = (miny+maxy)/2

        newWashroomRoom = document.createElement('span')
        newWashroomRoom.innerHTML = washroomConstants[i].room

        newWashroomRoom.style.position = "absolute"

        

        newParentCont.appendChild(newWashroomRoom)

        newWashroomRoom.classList.add('washroomLabel')
        newWashroomRoom.style.transformOrigin = 'center center'
        newWashroomRoom.style.transform = `translate(${middlex-(newWashroomRoom.offsetWidth/2)}px,${middley-(newWashroomRoom.offsetHeight/2)}px)`

        console.log(newWashroomRoom.offsetWidth)

        const basicFallbackColours = {a:"mediumpurple",f:"magenta",m:"blue"}
        ctj.fillStyle = basicFallbackColours[washroomConstants[i].gender]||'black'

        ctj.fill()

        newCanvas.setAttribute('onclick', `zoomFr(${washroomConstants[i].room})`)

        newParentCont.appendChild(newCanvas)
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

    window.scrollTo(0,0)
}

async function setupMapContainer(zoomlevel, shift){
    document.getElementById('mapparentshift').style.transform = ""
    document.getElementById('mapcont').style.transform = ""


    mapcontdim = [2990,1600]

    width = (window.innerWidth > 0) ? window.innerWidth : screen.width

    if(width < 1100){
        width-=100


        document.getElementById('mapsectioncont').style.width = "unset"
    }else{
        width = 700

        document.getElementById('mapsectioncont').style.width = "700px"
    }



    scaleFactor = width/mapcontdim[0]

    document.getElementById('mapwrapper').style.height = mapcontdim[1]*scaleFactor+"px"

    document.getElementById('mapcont').style.transform = `scale(${scaleFactor*(((zoomlevel)||1))})`

    if(shift) {
        document.getElementById('mapparentshift').style.transform = `translate(-${((shift[0]-width/2) > 0) ? (shift[0]-width/2) : 0}px,${((-shift[1]))+250}px)`
    }
}

async function propagateData(data){
    l = 0
    console.log(data)
    incidents = []
    while(l<data.rows.length){
        if(!(data.rows[l].c[0] && data.rows[l].c[1] && data.rows[l].c[2] && data.rows[l].c[3] && data.rows[l].c[4])){
            console.error("An incident could not be parsed")
        }else{
            newinc = {
                room: data.rows[l].c[0].v,
                details: data.rows[l].c[1].v,
                timeline: [
                    {
                        date: new Date(data.rows[l].c[3].f).toLocaleDateString(),
                        details: data.rows[l].c[2].v,
                        impact: data.rows[l].c[4].v[0]
                    }
                ]
            }

            incidents.push(newinc)
        }
        
        console.log(l)
        l++
    }

    incidents = {
        incidents:incidents
    }

    window.localStorage.setItem('cachedWashroomData', JSON.stringify(incidents))

    setupHome()
}

async function getOffsiteContent(){
    function reqListener () {
        var jsonString = this.responseText.match(/(?<="table":).*(?=}\);)/g)[0];
        var json = JSON.parse(jsonString);
        
        propagateData(json)
    }
      
    var id = '1xoXR5qm1s603CVKMuwqwGrbxTPRD-2Kb-vF_ElV0PIc';
    var gid = '0';
    var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", url, true);
    oReq.send();

    return []
}

async function getContent(){
    contentCache = window.localStorage.getItem('cachedWashroomData')
    console.log(contentCache)

    if(!contentCache){
        content = await getOffsiteContent()

        window.localStorage.setItem('cachedWashroomData', JSON.stringify(content))
    }else(
        content = JSON.parse(contentCache)
    )

    console.log(content)
    return content
}

async function listWashrooms(){
    incidents = (await getContent())

    incidents = incidents.incidents

    updatedWashrooms = []

    g = 0
    while(g<washroomConstants.length){
        newPush = JSON.parse(JSON.stringify(washroomConstants[g]))
        newPush.impact = 3
        updatedWashrooms.push(newPush)
        g++
    }

    selectedFloor = window.localStorage.getItem('floorSelected')

    floorWrs = []

    otherWrs = []

    k = 0

    console.log(incidents)
    if(incidents.length == 0 || incidents[0].room == 'Room #'){
        incidents = []
    }
    while(k<incidents.length){
        p = 0

        found = false

        while(p<updatedWashrooms.length){
            
            if(updatedWashrooms[p].room == incidents[k].room){
                found = true

                if(updatedWashrooms[p].incidents){
                    updatedWashrooms[p].incidents.push(incidents[k])
                    if(updatedWashrooms[p].impact > incidents[k].timeline[incidents[k].timeline.length-1].impact) updatedWashrooms[p].impact = incidents[k].timeline[incidents[k].timeline.length-1].impact
                }else{
                    updatedWashrooms[p].incidents = [incidents[k]]
                    updatedWashrooms[p].impact = incidents[k].timeline[incidents[k].timeline.length-1].impact
                }
            }
            p++

        }

        if(!found) return alert('a fatal issue has occurred')
        k++
    }

    k = 0
    while(k<updatedWashrooms.length){
        if(updatedWashrooms[k].floor == selectedFloor){
            if(updatedWashrooms[k].incidents){
                floorWrs.unshift(updatedWashrooms[k])
            }else{
                floorWrs.push(updatedWashrooms[k])
            }
        }else{
            if(updatedWashrooms[k].incidents){
                otherWrs.unshift(updatedWashrooms[k])
            }else{
                otherWrs.push(updatedWashrooms[k])
            }
        }
        k++
    }

    await renderWashroomList([
            {
                list:floorWrs,
                label: `Washrooms on floor ${selectedFloor}`
            },
            {
                list:otherWrs,
                label: "Other Washrooms"
            }
        ])
}

async function renderWashroomList(data){
    const genders = {a:"All gender",f:"Girls",m:"Boys"}
    const statusColours = ["#ff4747","#ffa647","#60ff67"]
    document.getElementById('listed').innerHTML = ''
    u = 0
    while(u<data.length){
        newSectionLabel = document.createElement('div')
        
        newSectionLabelText = document.createElement('span')
        newSectionLabelText.innerHTML = data[u].label
        newSectionLabel.appendChild(newSectionLabelText)
        newSectionLabelText.classList.add('sectionLabelText')

        newSectionLabel.classList.add('sectionLabelSpan')
        div = document.createElement('span')
        div.classList.add('sectionLabelDivider')
        newSectionLabel.appendChild(div)

        document.getElementById('listed').appendChild(newSectionLabel)

        p = 0
        while(p<data[u].list.length){
            newWashroomBox = document.createElement('div')
            newWashroomBox.classList.add('washroomListed')
            document.getElementById('listed').appendChild(newWashroomBox)

            newHeaderBox = document.createElement('div')
            newHeaderBox.style.display = 'flex'
            newHeaderBox.style.alignItems = 'center'
            newHeaderBox.style.gap = "10px"
            newWashroomBox.appendChild(newHeaderBox)

            newStatusIndicator = document.createElement('span')
            newStatusIndicator.classList.add('statusIndicatorBubble')
            newStatusIndicator.style.backgroundColor = statusColours[data[u].list[p].impact-1]
            newHeaderBox.appendChild(newStatusIndicator)

            newDesc = document.createElement('span')
            newDesc.style.fontWeight = "900"
            newDesc.innerHTML = `Rm. ${data[u].list[p].room} - ${genders[data[u].list[p].gender]}`
            newHeaderBox.appendChild(newDesc)

            incidentCounter = document.createElement('span')
            incidentCounter.innerHTML = `${(data[u].list[p]["incidents"] || []).length} active incidents`
            incidentCounter.classList.add('incidentLabel')
            newWashroomBox.appendChild(incidentCounter)

            newLinkActionRow = document.createElement('div')
            newLinkActionRow.classList.add('listedActionRow')
            newWashroomBox.appendChild(newLinkActionRow)

            viewButton = document.createElement('a')
            viewButton.innerHTML = "View on map"
            viewButton.setAttribute('href', `javascript:zoomFr(${data[u].list[p].room})`)
            newLinkActionRow.appendChild(viewButton)

            reportButton = document.createElement('a')
            reportButton.innerHTML = "Report Issue"
            reportButton.setAttribute('href', `javascript:reportIssue(${data[u].list[p].room})`)
            newLinkActionRow.appendChild(reportButton)

            incidents = document.createElement('div')
            incidents.style.display = 'flex'
            incidents.style.flexFlow = 'column'
            newWashroomBox.appendChild(incidents)

            if(data[u].list[p].incidents){
                y = 0
                while(y<data[u].list[p].incidents.length){
                    newIncident = document.createElement('div')
                    incidents.appendChild(newIncident)
                    newIncident.classList.add('incidentCont')
                    newTimeline = document.createElement('div')
                    newTimeline.classList.add('timeline')

                    incidentHeader = document.createElement('span')
                    incidentHeader.style.fontSize = "18px"
                    incidentHeader.style.fontWeight = "900"
                    
                    incidentHeader.innerHTML = data[u].list[p].incidents[y].details
                    newIncident.appendChild(incidentHeader)

                    newIncident.appendChild(newTimeline)
                    //FOR EACH ITEM ON TIMELINE
                    h = 0
                    while(h<data[u].list[p].incidents[y].timeline.length){
                        newTimelineCont = document.createElement('div')
                        newTimelineCont.classList.add('timelineParent')
                        newTimelineCont.style.display = 'flex'
                        newTimelineCont.style.gap = '10px'
                        newTimeline.appendChild(newTimelineCont)

                        timelineDot = document.createElement('span')
                        timelineDot.classList.add('timelineDot')
                        newTimelineCont.appendChild(timelineDot)

                        timeLineText = document.createElement('div')
                        timeLineText.style.display = 'flex'
                        timeLineText.style.flexFlow="column"
                        
                        newTimelineCont.appendChild(timeLineText)
                        
                        newTimelineItem = document.createElement('span')
                        newTimelineItem.innerHTML = data[u].list[p].incidents[y].timeline[h].details
                        timeLineText.appendChild(newTimelineItem)

                        newTimeLineDate = document.createElement('span')
                        newTimeLineDate.style.fontSize = "12px"
                        newTimeLineDate.innerHTML = data[u].list[p].incidents[y].timeline[h].date
                        timeLineText.appendChild(newTimeLineDate)
                        h++
                    }
                    y++
                }
            }
            //FOR EACH INCIDENT
            
            p++
        }
        u++
    }
}

async function showFloor(floor){
    contp = document.getElementById('mapparentshift')

    window.localStorage.setItem('floorSelected', floor)

    l = 0
    while(l<contp.children.length){
        contp.children[l].style.visibility = "hidden"

        if(l+1==floor){
            contp.children[l].style.visibility = "unset"
        }
        l++
    }

    prnbtmns = document.getElementById('floorselection')

    b = 0
    while(b<prnbtmns.children.length){
        prnbtmns.children[b].classList.remove("selected")
        b++
    }

    prnbtmns.children[floor-1].classList.add('selected')

    await setupMapContainer()

    listWashrooms()
}

async function setupWrFocusButtons(){
    return
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

async function beginSetup(){
    getOffsiteContent()
}

async function setupHome(){
    window.localStorage.setItem('floorSelected', 1)

    getContent()

    await drawFirstFloor()
    await drawSecondFloor()
    await drawThirdFloor()

    await drawWashroomLocations()

    await setupMapContainer()

    await setupWrFocusButtons()


    await showFloor(1)

    await checkForSearchQuery()
}

async function checkForSearchQuery(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('rpt');


    if(!myParam) return

    reportIssue(myParam)

    
}

async function reportIssue(room){
    const genders = {a:"All gender",f:"Girls",m:"Boys"}
    altgenders = {a:"All+gender",f:"Girls",m:"Boys"}
    v = 0
    found = false
    while(v<washroomConstants.length){
        if(washroomConstants[v].room == room){
            found = JSON.parse(JSON.stringify(washroomConstants[v]))
        }
        v++
    }

    if(!found) return alert('An issue occurred while processing your requrest')
    
    document.getElementById('washroomreport').innerHTML = `Rm. ${found.room} - ${genders[found.gender]}`

    document.getElementById('extbutton').setAttribute('onclick', `location = 'https://docs.google.com/forms/d/e/1FAIpQLSdjEIWMrOZxok97xVB6F32aCAOX46S-5U2H8btVfB5Kei205A/viewform?usp=pp_url&entry.305777253=${found.room}+-+${altgenders[found.gender]}'`)

    zoomFr(room)
    document.getElementById('listed').style.display = 'none'
    document.getElementById('floorselection').style.display = 'none'

    document.getElementById('repo').style.display = "flex"
}

async function cancelReport(){
    document.getElementById('listed').style.display = 'flex'
    document.getElementById('floorselection').style.display = 'flex'

    document.getElementById('repo').style.display = 'none'
}

window.addEventListener('resize', e=>{
    setupMapContainer()
})