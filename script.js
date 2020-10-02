const endpoint = `https://gist.githubusercontent.com/Pinois/93afbc4a061352a0c70331ca4a16bb99/raw/6da767327041de13693181c2cb09459b0a3657a1/topics.json`;


async function fetching() {
    const res = await fetch(endpoint);
    const data = await res.json();
    console.log(data);
    return data;
}

fetching();