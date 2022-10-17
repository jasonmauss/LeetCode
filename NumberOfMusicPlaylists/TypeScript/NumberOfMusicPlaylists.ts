// Solution for: https://leetcode.com/problems/number-of-music-playlists/
const numMusicPlaylists = (n: number, goal: number, k: number): number => {

    const quotient = 10 ** 9 + 7;

    let f = new Array(goal + 1).fill(0).map(a => new Array(n + 1).fill(0));

    f[0][0] = 1;

    // f[i][j] represents the number of playlists that its length is i and it contains j different songs
    for(let i = 1; i <= goal; i++) {

        for (let j = 1; j <= Math.min(i, n); j++) {
            // Add a new song to playlist
            f[i][j] += f[i - 1][j - 1] * (n - j + 1)
            // Add an existed song to playlist
            f[i][j] += f[i - 1][j] * Math.max(j - k, 0)
            f[i][j] = f[i][j] % quotient;
        }
    }

    return f[goal][n];

};


// some test cases
console.log(numMusicPlaylists(3,3,1)); // 6
console.log(numMusicPlaylists(2,3,0)); // 6
console.log(numMusicPlaylists(2,3,1)); // 2