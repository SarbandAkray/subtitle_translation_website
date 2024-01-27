export async function translate(line: string) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "text/plain");

  const raw = line;

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    "https://translator-api.glosbe.com/translateByLangWithScore?sourceLang=en&targetLang=ckb",
    requestOptions
  );

  return await result.json();
}
