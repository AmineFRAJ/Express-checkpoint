const checkDate = (req, res, next) => {
    const currentDay = new Date();
    const day = currentDay.getDay();
    const hour =currentDay.getHours();
    if (day>=1 && day<=5 && hour >=9 && hour<=17)
        next();
    else res.send("This web site is only available from 9 to 17 pm");

}
module.exports=checkDate;
