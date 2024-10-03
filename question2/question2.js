function resolvedPromise() {
	return new Promise(resolve =>{
		setTimeout(() => {

			resolve("promise resolved after 500 ms")
		}, 500);
	});
	}

async function resolvedCall() {
resolvedMessage = await resolvedPromise();
	console.log(resolvedMessage);
}


function rejectedPromise() {
	new Promise(function (resolve, reject) {

		setTimeout(() => {

			throw new Error("promise rejected");
		}, 500);

	})

	}

async function rejectedCall() {
	rejectedPromise();
}


resolvedCall();
rejectedCall();










//Callback.js

const delayedSuccess = () => {
	setTimeout(() => {
		let success = { 'message': 'delayed success' }
		console.log(success);
	}, 500)
}

const delayedException = () => {
	setTimeout(() => {
		try {
			throw new Error('error: delayed exception!');
		}
		catch (e) {
			console.error(e);
		}
	}, 500)
}