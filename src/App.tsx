import { useState } from 'react'
import { PackingInfiniteGrid } from '@egjs/react-infinitegrid'
import Item from './Item';
import './App.css';

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

export default function App() {
  const [items, setItems] = useState(() => getItems(0, 10))

  return (
    <>
    <header className="header">
      <figure className="logo">
        <svg viewBox="0 0 241 64">
          <path d="M96.0765 31.9073C96.1228 26.8431 97.8823 24.8918 101.772 24.8918C105.615 24.8918 107.189 26.6108 107.189 31.9073H96.0765ZM102.142 42.686C97.7897 42.686 96.2154 40.5953 96.1691 36.3674H112.467L112.838 32.2325C112.838 24.009 109.18 20.1528 101.818 20.1528C94.5486 20.1528 90.4277 24.5201 90.4277 34.1838C90.4277 43.4758 93.4836 47.7037 101.355 47.7037C105.985 47.7037 111.958 46.4958 111.958 46.4958L111.865 42.2214C111.819 42.2214 106.263 42.686 102.142 42.686Z" fill="white"></path>
          <path d="M127.654 42.5929C126.589 42.5929 123.719 42.3606 123.719 42.3606V26.3318C123.719 26.3318 126.821 25.2632 129.599 25.2632C133.118 25.2632 134.646 27.5862 134.646 33.5331C134.646 39.9911 133.488 42.5929 127.654 42.5929ZM130.293 20.1526C127.33 20.1526 123.719 21.7323 123.719 21.7323V9.79199H118.023V47.0995C118.023 47.0995 124.876 47.75 127.654 47.75C137.053 47.75 140.48 44.5442 140.48 33.6261C140.48 23.6836 137.424 20.1526 130.293 20.1526Z" fill="white"></path>
          <path d="M156.177 20.1528C148.352 20.1528 145.203 24.1019 145.203 33.5334C145.203 43.6617 147.981 47.6573 156.084 47.6573C158.769 47.6573 164.094 46.7281 164.094 46.7281L163.955 42.1285C163.955 42.1285 159.788 42.5466 157.797 42.5466C152.102 42.5466 151.037 40.2701 151.037 33.5334C151.037 27.4471 152.287 25.2635 157.751 25.2635C159.742 25.2635 163.909 25.6816 163.909 25.6816L164.14 21.1285C164.094 21.175 159.001 20.1528 156.177 20.1528Z" fill="white"></path>
          <path d="M180.531 42.8254C175.623 42.8254 174.604 39.8519 174.604 33.7657C174.604 27.6794 175.901 25.0312 180.531 25.0312C185.161 25.0312 186.457 27.6794 186.457 33.7657C186.457 39.8519 185.392 42.8254 180.531 42.8254ZM180.531 20.1528C171.733 20.1528 168.816 25.217 168.816 33.7657C168.816 42.5002 171.548 47.7037 180.531 47.7037C189.56 47.7037 192.245 42.5466 192.245 33.7657C192.245 25.217 189.282 20.1528 180.531 20.1528Z" fill="white"></path>
          <path d="M203.265 47.0997V26.6573C203.265 26.6573 206.136 25.2635 209.191 25.2635C213.173 25.2635 213.868 27.8652 213.868 33.1152V47.0997H219.563V32.9758C219.563 24.3342 217.757 20.1528 210.488 20.1528C207.062 20.1528 203.219 22.3829 203.219 22.3829V20.7568H197.523V47.1462H203.265V47.0997Z" fill="white"></path>
          <path d="M240.768 25.6351V20.7567H233.499V13.0908H227.804V20.7567H224.424V25.6815H227.804V37.9006C227.804 45.4736 229.656 47.7037 235.583 47.7037C237.435 47.7037 240.954 47.0067 240.954 47.0067L240.676 42.4072C240.676 42.4072 237.851 42.5466 236.37 42.5466C233.638 42.5466 233.499 41.1528 233.499 37.2037V25.5886H240.768V25.6351Z" fill="white"></path>
          <path d="M70.7952 32L53.3858 62.2456H18.7522L1.43535 32L18.8448 1.75442H53.4784L70.7952 32ZM72.2306 32L54.1729 0.5H18.1039L0 32L18.0576 63.5H54.1266L72.2306 32Z" fill="white"></path>
        </svg>
        <span className="sr-only">EBCONT, Digital is Now!</span>
      </figure>
    </header>
    <main className="flex -mt-32">
      <div className="grid">
        <PackingInfiniteGrid
          gap={0}
          className="data-accordion"
          onRequestAppend={(e) => {
            const nextGroupKey = (+e.groupKey! || 0) + 1;
            setItems([
              ...items,
              ...getItems(nextGroupKey, 10),
            ]);
          }}
          onRenderComplete={(e) => {
            console.log(e);
          }}
        >
          {items.map((item) =>
            <Item
              data-grid-groupkey={item.groupKey}
              defaultOpen={false}
              key={item.key}
              num={item.key}
            />
          )}
        </PackingInfiniteGrid>
      </div>
    </main>
    </>
  )
}
