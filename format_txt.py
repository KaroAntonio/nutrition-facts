
IN_FID = 'assets/nostalgic_tv_shows.txt'
OUT_FID = 'assets/tv_shows_list.txt'

f = open(IN_FID)
f_out = open(OUT_FID, 'w')

for line in f:
	f_out.write('"'+line[:-1]+'",\n')

f_out.close()
f.close()
	
