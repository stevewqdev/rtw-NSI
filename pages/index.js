import Head from 'next/head'

export default function Home() {
  const customStyles = 
  `
  .header{
    background: black;
  }
  `;
  return (
    <>
      <Head>
        <style>{customStyles}</style>
      </Head>
      <main className="index__main__div">
        <div className="container index__main">
          <div className="row d-flex justify-content-center align-items-center flex-column">
            <h2>Welcome to </h2>
            <h1 className="poppins">
              Repair The World 
            </h1>
            <h3>Serve the moment initiative</h3>
            <p>Under Development</p>
          </div>
        </div>
      </main>
    </>
  )
}

