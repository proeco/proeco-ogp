export default function Home() {
  return (
    <div style={{ maxWidth: '700px', color: '#222', margin: '0 auto' }}>
      <h1>This is OGP Server for Proeco!</h1>
      <ul style={{ background: '#f6f6f6', padding: '30px' }}>
        <li>
          Proeco:
          <a href="https://www.proeco.app/ja" target="_blank" rel="noreferrer">
            https://www.proeco.app/ja
          </a>
        </li>
        <li>
          GitHub:
          <a href="https://github.com/proeco/proeco-ogp" target="_blank" rel="noreferrer">
            https://github.com/proeco/proeco-ogp
          </a>
        </li>
      </ul>
      <h2>Sample</h2>
      <p>
        https://proeco-ogp.vercel.app/api/ogp?title=hogehuga&teamName=penguin&teamIconUrl=https://itizawa-tech.growi.cloud/attachment/619cf4648062e8c5ac7e684f
      </p>
      <img
        width="100%"
        src="https://proeco-ogp.vercel.app/api/ogp?title=hogehuga&teamName=penguin&teamIconUrl=https://itizawa-tech.growi.cloud/attachment/619cf4648062e8c5ac7e684f"
      />
    </div>
  );
}
