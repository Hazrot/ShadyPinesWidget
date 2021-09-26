export class Design {
    constructor({position = 'bottom-right'} = {}) {
        this.position = this.getPosition(position);
        this.open = false;
        this.initalise();
        this.createStyles();
        this.activeLi();

    }

    getPosition(position) {
        const [vertical, horizontal] = position.split('-');
        return {
            [vertical]: '30px',
            [horizontal]: '30px'
        };
    }

    initalise() {
        const container = document.createElement('div');
        container.style.position = "fixed";
        Object.keys(this.position)
            .forEach(key => container.style[key] = this.position[key]);
        document.body.appendChild(container);
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('wrapper');
        container.appendChild(buttonContainer);
        const chatIcon = document.createElement('div');
        chatIcon.classList.add('widget-menu');
        this.chatIcon = chatIcon;


        // const closeIcon = document.createElement('img');
        // closeIcon.src = '';
        // closeIcon.classList.add('icon','hidden');
        // this.closeIcon = closeIcon;
        const widgetUL = document.createElement('ul');
        widgetUL.classList.add('Widget-menu-ul');

        // Monday
        const MonLI = document.createElement('li');
        MonLI.classList.add('Widget-menu-li');
        const MonA = document.createElement('a');
        MonA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        MonA.href = '#Mon';
        MonA.innerText = "Mon"
        var LiInA = MonLI.appendChild(MonA);

        // Tuesday
        const TueLI = document.createElement('li');
        TueLI.classList.add('Widget-menu-li');
        const TueA = document.createElement('a');
        TueA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        TueA.href = '#Tue';
        TueA.innerText = "Tue"
        var TueLiInA = TueLI.appendChild(TueA);

// wednesday
        const WedLI = document.createElement('li');
        WedLI.classList.add('Widget-menu-li');
        const WedA = document.createElement('a');
        WedA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        WedA.href = '#Wed';
        WedA.innerText = "Wed"
        var WedLiInA = WedLI.appendChild(WedA);

        // Thursday
        const ThuLI = document.createElement('li');
        ThuLI.classList.add('Widget-menu-li');
        const ThuA = document.createElement('a');
        ThuA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        ThuA.href = '#Thu';
        ThuA.innerText = "Thu"
        var ThuLiInA = ThuLI.appendChild(ThuA);

        // Friday
        const FriLI = document.createElement('li');
        FriLI.classList.add('Widget-menu-li');
        const FriA = document.createElement('a');
        FriA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        FriA.href = '#Fri';
        FriA.innerText = "Fri"
        var FriLiInA = FriLI.appendChild(FriA);

        // Saturday
        const SatLI = document.createElement('li');
        SatLI.classList.add('Widget-menu-li');
        const SatA = document.createElement('a');
        SatA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        SatA.href = '#Sat';
        SatA.innerText = "Sat"
        var SatLiInA = SatLI.appendChild(SatA);

        //sunday
        const SunLI = document.createElement('li');
        SunLI.classList.add('Widget-menu-li');
        const SunA = document.createElement('a');
        SunA.classList.add('Widget-menu-a');
        // var  LI = widgetUL.appendChild(widgetLI);
        SunA.href = '#Sun';
        SunA.innerText = "Sun"
        var SunLiInA = SunLI.appendChild(SunA);


        // widget Section

        const widgetSectionDiv = document.createElement("div");
        widgetSectionDiv.classList.add("widget-section");
        const WidgetSectionUl = document.createElement("ul");
        WidgetSectionUl.classList.add('widget-section-ul');



        //create all the of the content message container

        buttonContainer.appendChild(this.chatIcon);
        this.chatIcon.appendChild(widgetUL);
        widgetUL.appendChild(MonLI);
        widgetUL.appendChild(TueLI);
        widgetUL.appendChild(WedLI);
        widgetUL.appendChild(ThuLI);
        widgetUL.appendChild(FriLI);
        widgetUL.appendChild(SatLI);
        widgetUL.appendChild(SunLI);
        buttonContainer.appendChild(widgetSectionDiv);
        widgetSectionDiv.appendChild(WidgetSectionUl);



        //
        // var request = new XMLHttpRequest();
        // request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        // request.send();
        // request.onreadystatechange = function handleRequest(){
        //
        //     if (request.readyState === 4 && request.status === 200){
        //         var data = JSON.parse(request.responseText);
        //         data.forEach(function (singleData){
        //             const widgetContentLi = document.createElement('li');
        //             widgetContentLi.classList.add('widget-content');
        //             const widgetContentImage = document.createElement('div');
        //             widgetContentImage.classList.add('widget-content-image');
        //             const widgetContentImgTag = document.createElement('img');
        //             widgetContentImgTag.src = 'assets/chat.svg';
        //             // widgetContentImgTag.alt = "#";
        //             const widgetArticle = document.createElement('div');
        //             widgetArticle.classList.add('widget-article');
        //             const widgetArticleHeading = document.createElement('div');
        //             widgetArticleHeading.classList.add('widget-article-heading');
        //             widgetArticleHeading.innerText = singleData.title;
        //             const widgetTime = document.createElement('div');
        //             widgetTime.classList.add('widget-time');
        //             widgetTime.innerText = '10:00 PM - 12.00 AM';
        //             const widgetDescription = document.createElement('div');
        //             widgetDescription.classList.add('widget-description');
        //             widgetDescription.innerText = singleData.title;
        //
        //             WidgetSectionUl.appendChild(widgetContentLi);
        //             widgetContentLi.appendChild(widgetContentImage);
        //             widgetContentImage.appendChild(widgetContentImgTag);
        //             widgetContentLi.appendChild(widgetArticle);
        //             widgetArticle.appendChild(widgetArticleHeading);
        //             widgetArticle.appendChild(widgetTime);
        //             widgetArticle.appendChild(widgetDescription);
        //         })
        //
        //
        //         // console.log(JSON.parse(request.responseText));
        //     }
        // }
        //
        var request = new XMLHttpRequest();

        request.open('GET', 'https://shadypinesradio.herokuapp.com/api/widget/', true);

        request.send();
        request.onreadystatechange = function handleRequest(){
            if (request.readyState === 4 && request.status === 200){
                const date = new Date();
                const day = date.getDay();
                var data = JSON.parse(request.response);
                // var fri = JSON.parse(data.Fri)
                console.log(JSON.parse(request.responseText));
                var dayData = null;
                // console.log(dayData)




                switch (day) {
                    case 1:
                        dayData = data.data.Monday;
                        console.log("Monday");
                        console.log(dayData);


                        break;
                    case 2:
                        dayData = data.data.Tuesday;
                        console.log("Tuesday");
                        break;
                    case 3:
                        dayData = data.data.Wednesday;
                        console.log("Wednesday");
                        break;
                    case 4:
                        dayData = data.data.Thursday;
                        console.log("Thursday")
                        break;
                    case 5:
                        dayData = data.data.Friday;
                        console.log("Friday")
                        break;
                    case 6:
                        dayData = data.data.Saturday;
                        console.log("Saturday");
                        break;
                    case 0:
                        dayData = data.data.Sunday;
                        console.log("Sunday")
                        break;
                    default:


                }



                dayData.forEach(function (singleData){
                    var showImg = singleData.shows[0].image
                    const widgetContentLi = document.createElement('li');
                    widgetContentLi.classList.add('widget-content');

                    const widgetContentImage = document.createElement('div');
                    widgetContentImage.classList.add('widget-content-image');

                    const widgetContentImgTag = document.createElement('img');
                    widgetContentImgTag.src = showImg;
                    // widgetContentImgTag.alt = "#";
                    const widgetArticle = document.createElement('div');
                    widgetArticle.classList.add('widget-article');

                    var start_Time = singleData.startTime;
                    // var H = +start_Time.substr(0, 2);
                    // var h = H % 12 || 12;
                    // var ampm = (H < 12 || H === 24) ? "AM" : "PM";
                    // start_Time = h + start_Time.substr(2, 3) + ampm;
                    var end_Time = singleData.endTime;
                    // var H1 = +start_Time.substr(0, 2);
                    // var h1 = H1 % 12 || 12;
                    // var ampm1 = (H1 < 12 || H1 === 24) ? "AM" : "PM";
                    // end_Time = h1 + end_Time.substr(2, 3) + ampm1;
                    // console.log(end_Time)
                    var myDate = new Date(start_Time)
                    var strDate = myDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
                    var myDate2 = new Date(end_Time)
                    var endDate = myDate2.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
                    console.log(strDate.split(',')[1])
                    widgetArticle.innerText = strDate.split(',')[1] + '-' + endDate.split(',')[1] + ' (PT)';
                    const widgetArticleHeading = document.createElement('div');
                    widgetArticleHeading.classList.add('widget-article-heading');
                    widgetArticleHeading.innerText = singleData.shows[0].showName;

                    const widgetTime = document.createElement('div');
                    widgetTime.classList.add('widget-time');
                    widgetTime.innerText = singleData.shows[0].djName;

                    const widgetDescription = document.createElement('div');
                    widgetDescription.classList.add('widget-description');
                    widgetDescription.innerText = singleData.shows[0].showDescription;

                    WidgetSectionUl.appendChild(widgetContentLi);
                    widgetContentLi.appendChild(widgetContentImage);
                    widgetContentImage.appendChild(widgetContentImgTag);
                    widgetContentLi.appendChild(widgetArticle);
                    widgetArticle.appendChild(widgetArticleHeading);
                    widgetArticle.appendChild(widgetTime);
                    widgetArticle.appendChild(widgetDescription);

                })
                var navbar = document.querySelectorAll('.Widget-menu-a');
                console.log(navbar);
                var clickDayData = null;
                console.log(clickDayData)
                navbar.forEach(function (element) {
                    // console.log(element)
                    element.addEventListener("click", function () {
                        var activeDay = document.querySelector('.Widget-active');
                        // console.log(activeDay.innerText);
                        console.log(JSON.parse(request.responseText));

                        switch (activeDay.innerText) {
                            case 'Mon':
                                clickDayData = data.data.Monday;
                                console.log("Monday");
                                console.log();
                                break;
                            case 'Tue':
                                clickDayData = data.data.Tuesday;
                                console.log("Tuesday");
                                break;
                            case 'Wed':
                                clickDayData = data.data.Wednesday;
                                console.log("Wednesday");
                                break;
                            case 'Thu':
                                clickDayData = data.data.Thursday;
                                console.log("Thursday")
                                break;
                            case 'Fri':
                                clickDayData = data.data.Friday;
                                console.log("Friday")
                                break;
                            case 'Sat':
                                clickDayData = data.data.Saturday;
                                console.log("Saturday");
                                break;
                            case 'Sun':
                                clickDayData = data.data.Sunday;
                                console.log("Sunday")
                                break;
                            default:


                        }
                        // this.classList.add("Widget-active");
                        clickDayData.forEach(function (singleData){
                            var showImg = singleData.shows[0].image
                            const widgetContentLi = document.createElement('li');
                            widgetContentLi.classList.add('widget-content');

                            const widgetContentImage = document.createElement('div');
                            widgetContentImage.classList.add('widget-content-image');

                            const widgetContentImgTag = document.createElement('img');
                            widgetContentImgTag.src = showImg;
                            // widgetContentImgTag.alt = "#";
                            const widgetArticle = document.createElement('div');
                            widgetArticle.classList.add('widget-article');

                            var start_Time = singleData.startTime;
                            // var H = +start_Time.substr(0, 2);
                            // var h = H % 12 || 12;
                            // var ampm = (H < 12 || H === 24) ? "AM" : "PM";
                            // start_Time = h + start_Time.substr(2, 3) + ampm;
                            var end_Time = singleData.endTime;
                            // var H1 = +start_Time.substr(0, 2);
                            // var h1 = H1 % 12 || 12;
                            // var ampm1 = (H1 < 12 || H1 === 24) ? "AM" : "PM";
                            // end_Time = h1 + end_Time.substr(2, 3) + ampm1;
                            // console.log(end_Time)
                            var myDate = new Date(start_Time)
                            var strDate = myDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
                            var myDate2 = new Date(end_Time)
                            var endDate = myDate2.toLocaleString("en-US", {timeZone: "America/Los_Angeles"})
                            console.log(strDate.split(',')[1])
                            widgetArticle.innerText = strDate.split(',')[1] + '-' + endDate.split(',')[1] + ' (PT)';
                            const widgetArticleHeading = document.createElement('div');
                            widgetArticleHeading.classList.add('widget-article-heading');
                            widgetArticleHeading.innerText = singleData.shows[0].showName;

                            const widgetTime = document.createElement('div');
                            widgetTime.classList.add('widget-time');
                            widgetTime.innerText = singleData.shows[0].djName;

                            const widgetDescription = document.createElement('div');
                            widgetDescription.classList.add('widget-description');
                            widgetDescription.innerText = singleData.shows[0].showDescription;

                            WidgetSectionUl.appendChild(widgetContentLi);
                            widgetContentLi.appendChild(widgetContentImage);
                            widgetContentImage.appendChild(widgetContentImgTag);
                            widgetContentLi.appendChild(widgetArticle);
                            widgetArticle.appendChild(widgetArticleHeading);
                            widgetArticle.appendChild(widgetTime);
                            widgetArticle.appendChild(widgetDescription);
                        })

                    })
                })

            }
        }


    }


    activeLi() {
        // ACTIVE MENU

        var selectMenuClass = document.querySelectorAll('.Widget-menu-a');
        var selectAPI = Array.prototype.slice.call(selectMenuClass);
        const date = new Date();
        var day = date.getDay();
        // var apiDay = null;
        console.log(day)
        switch (day) {
            case 1:
                break;
            case 2:
                selectMenuClass[1].classList.add('Widget-active');
                break;
            case 3:
                selectMenuClass[2].classList.add('Widget-active');
                break;
            case 4:
                selectMenuClass[3].classList.add('Widget-active');
                break;
            case 5:
                selectMenuClass[4].classList.add('Widget-active');
                console.log("Friday")
                break;
            case 6:
                selectMenuClass[5].classList.add('Widget-active');
                break;
            case 0:
                selectMenuClass[6].classList.add('Widget-active');
                break;
            default:
                selectMenuClass[1].classList.add('Widget-active');

        }
        var navbar = document.querySelector('.widget-menu').querySelectorAll('a');
        console.log(navbar);

        navbar.forEach(element => {
            // console.log(element)
            element.addEventListener("click", function () {

                navbar.forEach(nav =>{
                    nav.classList.remove("Widget-active");
                }  )
                this.classList.add("Widget-active");

            })
        })
    }


    createStyles() {
        const styleTag = document.createElement('style');
        document.head.appendChild(styleTag);
        styleTag.innerHTML = `
            body{
    font-family:  Arial, Helvetica, sans-serif;

}

/*---------------------------------------------------------menu-bar---------------------------------*/
.wrapper{
    width: 300px;   
    float: right;
    background: #121f5f;
    max-height: 400px;  
    min-height: 400px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    right: -25px;
    bottom: 75px;
    position: absolute;
    transition: max-height .2s ease;
    font-family: Helvetica, Arial ,sans-serif;
}
.widget-menu{
    width: 300px;
    margin: 0 auto;
}

.Widget-menu-ul{
   
    padding-left: 6px;

}

.Widget-menu-li{
    float: left;
    list-style: none;
    margin: 0.5px;
}

.Widget-menu-a{
    text-decoration: none;
    display: block;
    padding: 7px 7px;
    font-size:15px;
    
    border-radius: 6px;
    color: #ffffff;
    margin-top: 20px;
}
.Widget-menu-a:hover{
    background: black;
    color: #ffffff;
}

.Widget-active{
    background: black;
    color: #ffffff;
}
.widget-section{
    padding-top: 50px;

}
::-webkit-scrollbar{
    display: none;
}
.widget-section-ul{
    width: 297px;
    height: 316px;
    background: #212848;
    padding: 1px;
    overflow: hidden;
    overflow-y: scroll;

}
.widget-content{
    width: 300px;
    margin: 0 auto;
    border-bottom: 1px solid #ffffff;
    overflow: hidden;
}

.widget-content:last-child{
    border-bottom: none;
}

.widget-content-image{
    width: 90px;   
    float: left;
    /*margin-right: 10px;*/
    margin-top: 2px;
    height:100px

}
.widget-content-image img{
    border: 1px  solid black;
    border-radius: 10px;
    width: 80px;
    // height: 100px;

}
.widget-article{
    width: 300px;    
    color: #ffffff;
    margin-top: 8px;
    font-size: 12px
}
.widget-article-heading{
    font-size: 15px;
}
.widget-time{
    margin: 3px;
    font-size: 12px;
}
.widget-description{
    font-size: 10px;
} `
    }
}