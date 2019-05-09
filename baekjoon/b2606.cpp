#include <iostream>
#include <stdio.h>
#include <vector>
#include <algorithm>

using namespace std;

void dfs(int s, vector<int> graph[], bool check[]) {
  check[s] = true;
  for(int i=0; i<graph[s].size(); i+=1) {
    int next = graph[s][i];
    if(check[next] == false) {
      dfs(next, graph, check);
    }
  }
}

int main() {
  int n, m;
  cin >> n >> m;
  vector<int> graph[n+1];
  bool check[n + 1];
  fill(check, check + n + 1, false);

  for(int i=0; i<m; i+=1) {
    int u, v;
    cin >> u >> v;

    graph[u].push_back(v);
    graph[v].push_back(u);
  }

  for(int i=1; i<=n; i+=1) {
    sort(graph[i].begin(), graph[i].end());
  }

  dfs(1, graph, check);
  int cnt = 0;
  for(int i=1; i<=n; i+=1) {
    if(check[i] == true) cnt += 1;
  }
  cout << cnt - 1;

  return 0;
}