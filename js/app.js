class BoredApi {
    ajax;
    type;
    location;
    successFunction;
    loadingFunction;
    failureFunction;

        constructor(httpType, url, success, loading, failure) {
            this.ajax = new XMLHttpRequest();
            this.type = httpType;
            this.location = url;
            this.successFunction = success;
            this.loadingFunction = loading;
            this.failureFunction = failure;
        }

        sendRequest() {
            let container = this;
            this.ajax.onreadstatechange = function() {
                if(this.readState == 4 && this.status == 200) {
                    container.successFunction();
                } else if(this.readyState != 4) {
                    container.loadingFunction();
                } else {
                    container.failureFunction();
                }
            }
            this.ajax.open(this.type, this.location, true);
            this.ajax.send();
        }

    getGroupActivity() {

    }

    getFreeActivity() {

    }

    getRecreationalActivity() {

    }
}

function onLoading() {
    document.getElementById('new-activity').innerHTML = "LOADING";
}

function onFailure() {
    document.getElementById('new-activity').innerHTML = "Something Went Wrong!"
}

function trigger() {
    bored.sendRequest();
}

let bored = new BoredApi("GET", "http://www.boredapi.com/api/activity/", function() { console.log(this.ajax.responseText) }, onLoading, onFailure);
document.getElementById("content").addEventListener("click", trigger);

// bored.getActivity();