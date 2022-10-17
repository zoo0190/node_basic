import { mkdir, readdir, writeFile, symlink, readFile, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { basename, join } from 'path';

// // 1
// const projectFolder = new URL('./kings/sejong', import.meta.url);
// await mkdir(projectFolder, { recursive: true });

// writeFile('./kings/king-names.txt', '세종대왕');
// writeFile('./kings/sejong/sejong.txt', '훈민정음');

// // 2
// const sss = await readdir('./', { withFileTypes: true });
// const kk = sss.filter(item => item.isDirectory());
// kk.forEach(async item => {
//   console.log(await readdir(`./${item.name}`, { withFileTypes: true }));
// });

// async function recursive(dir) {
//   if (!dir.length) return;
//   const popVal = dir.pop();
//   if (popVal.isDirectory()) {
//     console.log(popVal.name);
//     const rr = await readdir(`${currPath}kings/${popVal.name}`, {
//       withFileTypes: true,
//     });
//     await recursive(rr);
//   }
//   await recursive(dir);
// }

// await recursive(sss);

// sss.forEach(item => {
//   if (item.isDirectory()) {
//     readdir(`${item.name}`, { withFileTypes: true }).then(val => {
//       console.log(item.name);
//       console.log(val);
//       val.forEach(val2 => {
//         if (val2.isDirectory()) {
//           console.log(val2.name);
//           console.log(val2);
//           readdir(`${val2.name}`, { withFileTypes: true }).then(is => {
//             console.log(is.name);
//           });
//         }
//       });
//     });
//   }
// });

const { pathname: curr } = new URL('.', import.meta.url);

const kingFld = join(curr, 'kings');
const sejongFld = join(kingFld, 'sejong');
const kingNameFile = join(kingFld, 'king-names.txt');
const sejongFile = join(sejongFld, 'sejong.txt');

try {
  // 1. folder 생성
  if (!existsSync(sejongFld)) await mkdir(sejongFld, { recursive: true });
  await writeFile(kingNameFile, '세종대왕');
  await writeFile(sejongFile, '훈민정음');

  // 2. folder tree
  // await을 비동기로 짤 수 있느냐...?!
  const ls = async (fld, depth = 0) => {
    const bname = basename(fld);
    console.log('   '.repeat(depth), bname);
    const files = await readdir(fld, { withFileTypes: true });

    for (const file of files) {
      if (
        !file.isDirectory() ||
        file.name.startsWith('.') ||
        file.name === 'node_modules'
      ) {
        continue;
      }

      await ls(join(fld, file.name), depth + 1);
    }
  };

  ls(curr);

  // 3. 파일 내용 출력 & kings 폴더 삭제
  // console.log('--------------------------', basename(kingNameFile));

  [kingNameFile, sejongFile].forEach(f => {
    readFile(f, 'utf8').then(data => {
      console.log('---------------', basename(f));
      console.log(data);
    });
  });
} catch (err) {}
