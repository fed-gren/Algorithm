#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

void bfs(int s, vector<int> graph[], bool check[]) {
  queue<int> q;

  q.push(s);
  check[s] = true;

  while(!q.empty()) {
    int tmp = q.front();
    q.pop();
    for(int i=0; i<graph[tmp].size(); i+=1) {
      if(check[graph[tmp][i]] == false) {
        q.push(graph[tmp][i]);
        check[graph[tmp][i]] = true;
      }
    }
  }
}

int main() {
  int n, m;
  cin >> n >> m;
  vector<int> graph[n+1];
  bool check[n+1];
  fill(check, check+n+1, false);

  for(int i=0; i<m; i+=1) {
    int u, v;
    cin >> u >> v;
    graph[u].push_back(v);
    graph[v].push_back(u);
  }

  for(int i=1; i<=n; i+=1) {
    sort(graph[i].begin(), graph[i].end());
  }

  bfs(1, graph, check);
  int cnt = 0;
  for(int i=1; i<=n; i+=1) {
    if(check[i] == true) cnt += 1;
  }
  cout << cnt - 1;

  return 0;
}