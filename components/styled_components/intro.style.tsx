const IntroStyle = ()=><style jsx global >{
    `
    
.intro>div {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    padding: 15vmin 3px;
    margin: auto;
    animation: intro .7s ease
}

.intro:nth-child(2)>div {
    animation-delay: .5s;
    background: var(--shadow-color)
}

.intro>span {
    background-image: url(/img/mancha.svg);
    background-repeat: no-repeat;
    background-size: 65% 100%;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.intro>div .image_intro {
    object-fit: contain;
    position: relative
}

.intro>div img.image_intro, .intro>div svg.image_intro {
    width: 90%;
    height: 90%
}

.intro>div>article {
    position: relative;
    padding: 0 5px
}

.intro>div>article>h1 {
    text-align: center;
    margin: 5px auto;
    color: var(--secondary-color);
    font-size: 2em
}

.intro>div>article>span {
    max-width: 380px;
    position: relative;
    margin: 10px auto;
    border-radius: 5px;
    padding: 5px 0
}

.intro>div>article>span>a {
    width: 120px;
    margin: 0 1px;
    text-align: center;
    border-bottom: 1px solid var(--primary-color)
}

.intro>div>article>span>a:hover {
    border-bottom: 1px solid var(--secondary-color)
}

.intro>div>article>span>a>p {
    margin: 5px auto;
    color: var(--primary-color);
    font-weight: 700;
    text-shadow: 0 1px var(--theme-color)
}

.intro>div>article>span>a:hover>p {
    color: var(--font-color);
    text-shadow: 0 1px var(--font-color)
}

.intro>div>article>span>a img {
    width: 48px;
    height: 48px;
    object-fit: contain
}

.intro>div>div {
    width: 100%;
    text-align: center;
    position: relative
}

.intro>div>div>a {
    text-align: center;
    position: relative;
    margin: 0 auto;
    width: 80px
}

@keyframes intro {
    0% {
        opacity: 0
    }
    100% {
        opacity: 1
    }
}
@media(min-width:720px) {
    .intro>div {
        grid-template-columns: 300px 1fr;
        justify-content: flex-end
    }
    .intro:nth-child(2n)>div {
        grid-template-columns: 1fr 300px
    }
}

`
    }</style>

    export default IntroStyle