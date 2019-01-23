export class Doctor {

    searchDoctor(name, issue) {
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=de75973a60d3cc329b037711d5e5eadb`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
            request.open("GET", url, true);
            request.send();
        });
    }

}





