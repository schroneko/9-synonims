import React from "react";
import InputBox from "./InputBox";
import "./index.css";

export const App: React.VFC = () => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      items.push(<InputBox key={3 * i + j} />);
    }
    items.push(<br key={9 + i} />);
  }
  return (
    <React.Fragment>
      <div className="boxes">{items}</div>
      <hr />
      <div className="text">
        <h1>9マス類語変換ゲーム</h1>
        <h2>ルールは簡単！</h2>
        <h3>1. まんなかに一つ言葉を書いてね</h3>
        <h3>2. 周りに思いつく類語を書いてね</h3>
        <h3>3. 全てのマスを埋めたら完成だよ</h3>
      </div>
    </React.Fragment>
  );
};
