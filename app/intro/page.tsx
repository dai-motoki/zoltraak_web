'use client';

import Sidebar from '../components/Sidebar';
import { useState } from 'react';

export default function Home() {
  const [isMacOpen, setIsMacOpen] = useState(false);
  const [isWindowsOpen, setIsWindowsOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24" style={{background: 'linear-gradient(135deg, #E0E7FF, #D1D1E0)'}}>
      <Sidebar />

      {/* メインコンテンツ */}
      <div className="ml-64 mt-[-80px]">
        <h1 className="text-4xl font-bold mb-8" style={{fontFamily: 'Noto Serif JP'}}>Zoltraakへようこそ！</h1>
        <p className="text-xl mb-4" style={{fontFamily: 'Noto Serif JP'}}>
          Zoltraakは本格的な魔法時代の始まりを象徴する強大な創造魔法の名です。
        </p>
        <p className="text-xl mb-8" style={{fontFamily: 'Noto Serif JP'}}>
          これまでの未体系であった呪文からの術の発動を、魔法の文法体系に昇華しより高速かつ広範囲な術式展開と強大な魔法の発動を可能とするシステムです。
        </p>
        <h2 className="text-2xl font-bold mb-4" style={{fontFamily: 'Noto Serif JP'}}>利用方法</h2>
        <p className="mb-4" style={{fontFamily: 'Noto Serif JP'}}>
          ビジネスサイドの方でも迷わないように、丁寧に記載します。
        </p>
        
        {/* Macユーザー向けの手順を追記 */}
        <div className="mb-8 border border-gray-300 rounded p-4" style={{background: '#FFF0F0'}}>
          <h3 className="text-xl font-bold mb-2 cursor-pointer flex items-center" onClick={() => setIsMacOpen(!isMacOpen)}>
            <span className="mr-2">👉</span>
            <span style={{fontFamily: 'Noto Serif JP'}}>Macでの利用方法</span>
          </h3>
          {isMacOpen && (
            <ol className="list-decimal list-inside mb-4">
              <li>
                <p className="mb-2">事前準備</p>
                <ol className="list-decimal list-inside ml-4 mb-2">
                  <li>
                    <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">
                      こちら
                    </a>
                    のリンクから、macOS用のPython3をダウンロードしてインストールします。
                  </li>
                  <li className="mt-2">
                    <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">
                      こちら
                    </a>
                    でANTHROPICのアカウントを作成し、Get API KeysよりAPI KEYをコピーして保存しておきます。
                    <strong>絶対に誰にも見られないように管理しましょう。勝手に課金され放題になってしまいます。</strong>
                  </li>
                  <li className="mt-2">
                    ホームディレクトリ直下に「workspace」など、任意の名前の専用フォルダを作っておくと、既存のファイルと混ざらずに管理しやすくなります。
                    ここでは、以下のようなフォルダを作成しておきます。
                    <pre className="bg-gray-100 rounded p-2 mt-2">
                      ~/workspace
                    </pre>
                    自分で別の名前を命名した場合、以下においては<code>workspace</code>を自分のつけた名前で読み替えてください。
                  </li>
                  <li className="mt-2">
                    ターミナルアプリを開きます。次項では、このターミナルに呪文を打ち込んで、<code>Enter</code>を押下していきます。
                  </li>
                </ol>
              </li>
              <li>
                <p className="mb-2">詠唱</p>
                <p className="mb-2">基本的には何も考えずに、以下の順番でコマンドを入力すればよいです。</p>
                <ol className="list-decimal list-inside ml-4">
                  <li>
                    <p className="mb-2">ワークスペースへ移動</p>
                    <pre className="bg-gray-100 rounded p-2">
                      cd ~/workspace
                    </pre>
                    <code>cd</code>とは「チェンジディレクトリ」の略で、ターミナルが指定したパスに移動してくれます。
                    つまり移動先の中でターミナルが動くよ、ということです。
                  </li>
                  <li>
                    <p className="mt-4 mb-2">仮想環境を構築</p>
                    <pre className="bg-gray-100 rounded p-2">
                      python3 -m venv .venv
                    </pre>
                    ターミナルが今いるフォルダ内に、仮想環境となるフォルダを作ってくれるコマンドです。
                    最後の<code>.venv</code>は任意のフォルダ名でも構いません。自分で名付けた場合、以下の手順についても<code>.venv</code>を自分のつけた名前に読み替えてください。
                    この中身が仮想環境となり、既存環境から切り離して<code>Zoltraak</code>を扱えるようになります。
                  </li>
                  <li>
                    <p className="mt-4 mb-2">仮想環境の有効化</p>
                    <pre className="bg-gray-100 rounded p-2">
                      source .venv/bin/activate
                    </pre>
                    こうするとターミナルの左側に<code>(.venv)</code>と表示されるかと思います。
                    そうなっている場合、ターミナルが仮想環境に対して動作していることを意味しています。
                    なお、解除には<code>deactivate</code>と打てばよいです。
                  </li>
                  <li>
                    <p className="mt-4 mb-2">Zoltraakのインストール</p>
                    <pre className="bg-gray-100 rounded p-2">
                      pip install zoltraak
                    </pre>
                    しばらく時間がかかります。<code>.venv</code>内を開くといくつものフォルダが作られていることがわかります。
                    特に、魔導書の根幹となるファイルたちは、以下のパスに保存されています。
                    <pre className="bg-gray-100 rounded p-2 mt-2">
                      ~/workspace/.venv/lib/python3.x/site-packages/zoltraak/grimoires
                    </pre>
                    この中身は、このREADME下部の「魔導書構成」で示されていますのでそちらを参照のこと。
                  </li>
                  <li>
                    <p className="mt-4 mb-2"><code>.env</code>ファイルの作成</p>
                    <p className="mb-2">
                      ファインダーを開いて、<code>~/workspace/.venv/lib/python3.x/site-packages/zoltraak</code>を開きます。
                    </p>
                    <p className="mb-2">
                      ここに「右クリック&gt;&gt;新規作成&gt;&gt;テキストドキュメント」から、テキストファイルを作成します。
                      =&gt;作成したら、ファイル名を<code>.env</code>に変更します。
                      それから、ファイルを開いて、1行目に以下のように入力して保存します。
                    </p>
                    <pre className="bg-gray-100 rounded p-2">
                      ANTHROPIC_API_KEY=ここにAnthropicから取得したキー
                    </pre>
                    <p className="mt-2">
                      ※本当はコマンドでも作成できますが、文字コードというのを合わせるなどが必要なので、現状は非エンジニアは手動で作成したほうが簡単のようです。
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 mb-2">詠唱</p>
                    <p className="mb-2">
                      以上で準備は整いました。以下のように、<code>zoltraak</code>コマンドに続けて"プロンプト"と起動式（プロンプトコンパイラ）を指定します。
                    </p>
                    <pre className="bg-gray-100 rounded p-2">
                      zoltraak "プロンプト内容" -c コンパイラ名
                    </pre>
                    <p className="mt-2">
                      コンパイラ名、プロンプト内容の例については、次項以降にて示します。
                    </p>
                    <p className="mt-2">
                      これにより、入力したプロンプトに基づいた要件定義書が生成されます。生成された要件定義書は叩き台となるため、必要に応じて内容を修正・拡充してください。
                      生成された要件定義書は、以下のフォルダに格納されます。
                    </p>
                    <pre className="bg-gray-100 rounded p-2 mt-2">
                      ~/workspace/generated/requirements
                      ~/workspace/requirements
                    </pre>
                  </li>
                </ol>
              </li>
            </ol>
          )}
        </div>

        <div className="mb-8 border border-gray-300 rounded p-4" style={{background: '#FFF0F0'}}>
          <h3 className="text-xl font-bold mb-2 cursor-pointer flex items-center" onClick={() => setIsWindowsOpen(!isWindowsOpen)}>
            <span className="mr-2">👉</span>  
            <span style={{fontFamily: 'Noto Serif JP'}}>Windowsでの利用方法</span>
          </h3>
          {isWindowsOpen && (
            <ol className="list-decimal list-inside mb-4">
              <li>
                <p className="mb-2">事前準備</p>
                <ol className="list-decimal list-inside ml-4 mb-2">
                  <li>
                    <a href="https://pythonlinks.python.jp/ja/index.html" target="_blank" rel="noopener noreferrer">
                      こちら
                    </a>
                    のリンク（非公式）から、windows用インストーラをダウンロードして、Python3をインストールします。
                  </li>
                  <li className="mt-2">
                    <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer">
                      こちら
                    </a>
                    でANTHROPICのアカウントを作成し、Get API KeysよりAPI KEYをコピーして保存しておきます。
                    <strong>絶対に誰にも見られないように管理しましょう。勝手に課金され放題になってしまいます。</strong>
                  </li>
                  <li className="mt-2">
                    ユーザ配下に「workspace」など、任意の名前の専用フォルダを作っておくと、既存のファイルと混ざらずに管理しやすくなります。
                    ここでは、以下のようなフォルダを作成しておきます。
                    <pre className="bg-gray-100 rounded p-2 mt-2">
                      C:/Users/{"{ユーザ名}"}/workspace
                    </pre>
                    自分で別の名前を命名した場合、以下においては<code>workspace</code>を自分のつけた名前で読み替えてください。
                  </li>
                  <li className="mt-2">
                    コマンドプロンプトやPowershellでも構いませんし、vscoedeなどを入れても構いません。以下、ターミナルと呼びます。
                    次項では、このターミナルに呪文を打ち込んで、<code>Enter</code>を押下していきます。
                  </li>
                </ol>
              </li>
              <li>
                <p className="mb-2">詠唱</p>
                <p className="mb-2">基本的には何も考えずに、以下の順番でコマンドを入力すればよいです。</p>
                <ol className="list-decimal list-inside ml-4">
                  <li>
                    <p className="mb-2">ワークスペースへ移動</p>
                    <pre className="bg-gray-100 rounded p-2">
                      cd C:/Users/{"{ユーザ名}"}/workspace
                    </pre>
                    <p>
                      <code>cd</code>とは「チェンジディレクトリ」の略で、ターミナルが指定したパスに移動してくれます。
                      つまり移動先の中でターミナルが動くよ、ということです。
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 mb-2">仮想環境を構築</p>
                    <pre className="bg-gray-100 rounded p-2">
                      python -m venv .venv
                    </pre>
                    <p>
                      ターミナルが今いるフォルダ内に、仮想環境となるフォルダを作ってくれるコマンドです。
                      最後の<code>.venv</code>は任意のフォルダ名でも構いません。自分で名付けた場合、以下の手順についても<code>.venv</code>を自分のつけた名前に読み替えてください。
                      この中身が仮想環境となり、既存環境から切り離して<code>Zoltraak</code>を扱えるようになります。
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 mb-2">仮想環境の有効化</p>
                    <pre className="bg-gray-100 rounded p-2">
                      .venv\scripts\activate
                    </pre>
                    <p>
                      こうするとターミナルの左側に<code>（.venv）</code>と表示されるかと思います。
                      そうなっている場合、ターミナルが仮想環境に対して動作していることを意味しています。
                      なお、解除には<code>deactivate</code>と打てばよいです。
                    </p>
                  </li>
                  <li>
                    <p className="mt-4 mb-2">Zoltraakのインストール</p>
                    <pre className="bg-gray-100 rounded p-2">
                      pip install zoltraak
                    </pre>
                    <p>
                      しばらく時間がかかります。<code>.venv</code>内を開くといくつものフォルダが作られていることがわかります。
                      特に、魔導書の根幹となるファイルたちは、以下のパスに保存されています。
                    </p>
                    <pre className="bg-gray-100 rounded p-2 mt-2">
                      C:\Users\{"{ユーザ名}"}\workspace\.venv\Lib\site-packages\zoltraak\grimoires
                    </pre>
                    <p>この中身は、このREADME下部の「魔導書構成」で示されていますのでそちらを参照のこと。</p>
                  </li>
                  <li>
                    <p className="mt-4 mb-2"><code>.env</code>ファイルの作成</p>
                    <p className="mb-2">
                      エクスプローラ（黄色いフォルダのやつ）を開いて、<code>C:/Users/{"{ユーザ名}"}/workspace/.venv/Lib/site-packages/zoltraak</code>を開きます。
                    </p>
                    <p className="mb-2">
                      ここに「右クリック&gt;&gt;新規作成&gt;&gt;テキストドキュメント」から、テキストファイルを作成します。
                    </p>
                  </li>
                </ol>
              </li>
            </ol>
          )}
        </div>
      </div>
    </main>
  );
}
