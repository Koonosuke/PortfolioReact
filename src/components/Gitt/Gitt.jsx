import React from "react";

function Gitt() {
  return (
    <div>
      {/* Section 01 */}
      <section className="sec-01">
        <div className="container">
          <h2 className="main-title">チーム開発でGitを使う手順</h2>
          <div className="content">
            <div className="text-box">
              <h3>1. リポジトリのクローン</h3>
              <p>最初に、リモートリポジトリをローカルにクローンします。</p>
              <pre>
                <code>
                  git clone &lt;リポジトリのURL&gt;
                  <br />
                  例: git clone https://github.com/username/repository.git
                </code>
              </pre>

              <h3>2. ブランチの作成と切り替え</h3>
              <p>
                チームでの開発では、通常メインのブランチ（mainやmaster）から新しいブランチを作成し、そのブランチで作業します。
              </p>
              <pre>
                <code>
                  git checkout -b &lt;新しいブランチ名&gt;
                  <br />
                  例: git checkout -b feature/add-login
                </code>
              </pre>

              <h3>3. 変更のステージングとコミット</h3>
              <p>
                コードに変更を加えたら、それをステージングし、コミットします。
              </p>
              <pre>
                <code>
                  git add .
                  <br />
                  git commit -m "変更内容の説明"
                  <br />
                  例: git add . <br />
                  git commit -m "ログイン機能を追加"
                </code>
              </pre>

              <h3>4. リモートリポジトリからの最新の変更を取り込む</h3>
              <p>
                作業を進めている間に、他のメンバーがメインのブランチ（mainやmaster）に変更を加えることがあります。そのため、自分の作業をリモートリポジトリの最新状態と同期させる必要があります。
              </p>
              <pre>
                <code>
                  git checkout main
                  <br />
                  git pull origin main
                  <br />
                  git checkout &lt;作業ブランチ&gt;
                  <br />
                  git merge main
                  <br />
                  例: git checkout main
                  <br />
                  git pull origin main
                  <br />
                  git checkout feature/add-login
                  <br />
                  git merge main
                </code>
              </pre>

              <h3>5. リモートブランチへのプッシュ</h3>
              <p>
                変更が完了したら、リモートリポジトリにブランチをプッシュします。
              </p>
              <pre>
                <code>
                  git push origin &lt;ブランチ名&gt;
                  <br />
                  例: git push origin feature/add-login
                </code>
              </pre>

              <h3>6. プルリクエストの作成</h3>
              <p>
                自分のブランチをメインのブランチにマージするために、プルリクエスト（Pull
                Request）を作成します。これにより、他のメンバーが変更内容をレビューし、承認後にメインのブランチにマージします。
              </p>

              <h3>7. コードレビューとマージ</h3>
              <p>
                チームメンバーはプルリクエストをレビューし、問題がなければメインのブランチにマージします。問題がある場合はフィードバックを受けて修正を行います。
              </p>

              <h3>8. 不要なブランチの削除</h3>
              <p>
                作業が完了してプルリクエストがマージされたら、不要になったブランチを削除します。
              </p>
              <pre>
                <code>
                  git branch -d &lt;ブランチ名&gt;
                  <br />
                  git push origin --delete &lt;ブランチ名&gt;
                  <br />
                  例: git branch -d feature/add-login
                  <br />
                  git push origin --delete feature/add-login
                </code>
              </pre>

              <h3>9. 定期的なリポジトリの更新</h3>
              <p>
                定期的にリモートリポジトリから最新の変更をプルして、自分のローカルリポジトリを最新の状態に保つことが重要です。
              </p>
              <pre>
                <code>git pull origin main</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gitt;
