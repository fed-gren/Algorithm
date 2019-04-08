//array 뒤집기

vector<int> reverseArray(vector<int> a) {
    int len = a.size();
    vector<int> vect(0, len);
    cout << len;
    for(int i=len-1; i>=0; i-=1) {
        vect.push_back(a[i]);
    }
    return vect;
}