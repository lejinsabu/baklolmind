const para = document.querySelectorAll(".p p")
const head = document.querySelectorAll(".p h1")
const shead = document.querySelectorAll(".p h4")
const futur = document.querySelectorAll(".future")
const big = document.querySelectorAll(".big")
const creative = document.querySelectorAll(".creative")

const name1 = document.querySelectorAll(".name hr")
const name2 = document.querySelectorAll(".name h3")
const name3 = document.querySelectorAll(".name h4")
const digital = document.querySelectorAll(".digital")
const uidesign = document.querySelectorAll(".uidesign")
const cwriting = document.querySelectorAll(".cwriting")
const Marketing = document.querySelectorAll(".Marketing")
const Web = document.querySelectorAll(".Web")
const Social = document.querySelectorAll(".Social")

const Whead1 = document.querySelectorAll(".heading hr")
const Whead = document.querySelectorAll(".heading h3")
const Whea = document.querySelectorAll(".heading h4")
const wview = document.querySelectorAll(".wview")
const img1 = document.querySelectorAll(".img1")
const img2 = document.querySelectorAll(".img2")
const img3 = document.querySelectorAll(".img3")
const img4 = document.querySelectorAll(".img4")

const aname = document.querySelectorAll(".aname hr")
const aname1 = document.querySelectorAll(".aname h3")
const aname2 = document.querySelectorAll(".aname h4")
const blocks = document.querySelectorAll(".blocks h3")
const amoto = document.querySelectorAll(".amoto")

const theader = document.querySelectorAll(".theader hr")
const theader1 = document.querySelectorAll(".theader h3")
const theader2 = document.querySelectorAll(".theader h4")
const feeds = document.querySelectorAll(".feeds")

const late = document.querySelectorAll(".late2 h1")
const late2 = document.querySelectorAll(".late2 p")
const tarikh = document.querySelectorAll(".tarikh")

const socillink = document.querySelectorAll(".socillink ")
const pro = document.querySelectorAll(".pro h1")
const pro1 = document.querySelectorAll(".pro p")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},{
    threshold: 0.5,

})


para.forEach(p => {
    observer.observe(p)
})
head.forEach(p => {
    observer.observe(p)
})
shead.forEach(p => {
    observer.observe(p)
})

name1.forEach(name => {
    observer.observe(name)
})
name2.forEach(name => {
    observer.observe(name)
})
name3.forEach(name => {
    observer.observe(name)
})
digital.forEach(digital => {
    observer.observe(digital)
})
uidesign.forEach(uidesign => {
    observer.observe(uidesign)
})
cwriting.forEach(cwriting => {
    observer.observe(cwriting)
})
Marketing.forEach(Marketing => {
    observer.observe(Marketing)
})
Web.forEach(Web => {
    observer.observe(Web)
})
Social.forEach(Social => {
    observer.observe(Social)
})

futur.forEach(future => {
    observer.observe(future)
})
big.forEach(big => {
    observer.observe(big)
})
creative.forEach(creative => {
    observer.observe(creative)
})

Whead1.forEach(header1 => {
    observer.observe(header1)
})
Whead.forEach(header1 => {
    observer.observe(header1)
})
Whea.forEach(header1 => {
    observer.observe(header1)
})
wview.forEach(wview => {
    observer.observe(wview)
})
img1.forEach(img1 => {
    observer.observe(img1)
})
img2.forEach(img2 => {
    observer.observe(img2)
})
img3.forEach(img3 => {
    observer.observe(img3)
})
img4.forEach(img4 => {
    observer.observe(img4)
})

aname.forEach(aname => {
    observer.observe(aname)
})
aname1.forEach(aname => {
    observer.observe(aname)
})
aname2.forEach(aname => {
    observer.observe(aname)
})
blocks.forEach(blocks => {
    observer.observe(blocks)
})
amoto.forEach(amoto => {
    observer.observe(amoto)
})

theader.forEach(theader => {
    observer.observe(theader)
})
theader1.forEach(theader => {
    observer.observe(theader)
})
theader2.forEach(theader => {
    observer.observe(theader)
})
feeds.forEach(feeds => {
    observer.observe(feeds)
})

late.forEach(late => {
    observer.observe(late)
})
late2.forEach(late => {
    observer.observe(late)
})
tarikh.forEach(tarikh => {
    observer.observe(tarikh)
})

socillink.forEach(socillink => {
    observer.observe(socillink)
})
pro.forEach(pro => {
    observer.observe(pro)
})
pro1.forEach(pro => {
    observer.observe(pro)
})