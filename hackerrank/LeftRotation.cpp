//해커랭크 코드 형식에 맞춰서 작성한 코드

vector<int> a(n);
    int idx = d;
    for (int i = 0; i < n; i++) {
        int a_item = stoi(a_temp[i]);
        a[i] = a_item;
    }
    for (int i = 0; i < n; i++) {
      cout << a[idx] << " ";
      idx += 1;
      if (idx == n) idx = 0;
    }