// from https://github.com/vlang/v/blob/b242e8d7ff6cab28c8598c61b569ed2d962e1c5b/vlib/strings/strings.v

module strings

pub fn repeat(c byte, n int) string {
	if n <= 0 {
		return ''
	}
	mut arr := [c].repeat(n + 1)
	arr[n] = `\0`
	return string(arr, n)
}
