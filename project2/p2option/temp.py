import pandas as pd
import numpy as np

df = pd.DataFrame({'A': 'foo bar foo bar foo bar foo foo'.split(),
                   'B': 'one one two three two two one three'.split(),
                   'C': np.arange(8), 'D': np.arange(8) * 2})
print(df)

query1 = df.query('A == "foo"')
query2 = df.query('C > 1')
query3 = df.query('C > 1 and D > 4')

print(query1)
print(query2)
print(query3)