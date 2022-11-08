import './Item.css'

export default function Item({ num }: any) {
  return (
    <details
      data-item={num + 1 }
      className="item"
    >
      <summary>
        <img
          src={`/items/${(num % 24) + 1}.png`}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt="ebcont"
        />
        <button
          type="button"
          className="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/>
          </svg>
        </button>
      </summary>
      <article>
        <p>Starten wir heute und transformieren wir Ihr Unternehmen gemeinsam zum digitalen Marktführer</p>
      </article>
      <nav>
        <button
          type="button"
          className="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/>
          </svg>
        </button>
        <button
          type="button"
          className="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
          </svg>
        </button>
      </nav>
    </details>
  )
}
