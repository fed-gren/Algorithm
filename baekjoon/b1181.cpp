//단어 정렬 - sort 함수 compare 옵션을 활용
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Word
{
public:
  string word;
  int length;
  Word(string word, int length) : word(word), length(length) {}
};

bool compare(Word a, Word b)
{
  if (a.length == b.length)
  { //길이 같을 때 사전순
    return a.word < b.word;
  }
  else
  { //길이 다르면 길이순
    return a.length < b.length;
  }
}

void printWords(vector<Word> &w, int len)
{
  vector<Word>::iterator it;
  string before = "";
  for (it = w.begin(); it != w.end(); ++it)
  {
    if (before == (*it).word)
      continue;
    else
    {
      cout << (*it).word;
      cout << "\n";
      before = (*it).word;
    }
  }
}

int main()
{
  vector<Word> words;
  int n;
  string word;
  cin >> n;
  while (n--)
  {
    cin >> word;
    words.push_back(Word(word, word.length()));
  }
  sort(words.begin(), words.end(), compare);
  printWords(words, n);
}