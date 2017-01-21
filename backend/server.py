import os
from MyQR import myqr


version, level, qr_name = myqr.run(
    'https://github.com/mguida22/Connections',
    version=1,
    level='H',
    picture=os.path.join(os.getcwd(), 'base_images', 'penguin.png'),
    colorized=False,
    contrast=1.0,
    brightness=1.0,
    save_name=None,
    save_dir=os.path.join(os.getcwd(), 'generated_codes')
)
