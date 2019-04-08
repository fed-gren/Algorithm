//2차원 배열 중 특정 범위의 최대값 구하기

int hourglassSum(vector<vector<int>> arr) {
    int len = 6;
    int max = -73;
    for(int i=0; i<len-2; i+=1) {
        for(int j=0; j<len-2; j+=1) {
            int sum = 0;
            sum += (arr[i][j] + arr[i][j+1] + arr[i][j+2]);
            sum += arr[i+1][j+1];
            sum += (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
            if(sum > max) max = sum;
        }
    }
    return max;
}