# kottans-backend

*Repo for studying at kottans-backend*

## [Unix Shell](https://github.com/kottans/backend/blob/master/tasks/unix-shell.md)
1. ![Conclusion](./task_unix_shell/last.PNG)

2. Never had to list hidden files in shell, but now I know that `ls -a` can do this;

## [Git Collaboration](https://github.com/kottans/backend/blob/master/tasks/git-collaboration.md)

![Finish Git](./task_git_collaboration/finish.PNG)

* what was new to you - some commands;
* what surprised you - squash and rebase at the same time;
* what you intend to use in future - squash commits instead of ammend

## [Memory Management](https://github.com/kottans/backend/blob/master/tasks/memory-management.md)

* What's going to happen if program reaches maximum limit of stack? - stack will grow, but once it reaches limit (8Mb)
 we will receive `stack overflow`
* What's going to happen if program requests a big (more then 128KB) memory allocation on ƒ? - anonymous memory
 mapping will be created
* What's the difference between Text and Data memory segments? - text is readonly, you could read or execute it,
 but you can read or write data segment;
variable is located in data segment but string it points to is located in text segment.

```md
vmmap --wide 15737
Process:         fsnotifier [15737]
Path:            /Applications/WebStorm.app/Contents/bin/fsnotifier
Load Address:    0x1000bb000
Identifier:      fsnotifier
Version:         ???
Code Type:       X86-64
Parent Process:  webstorm [15557]

Date/Time:       2019-11-05 12:29:42.121 +0200
Launch Time:     2019-11-05 11:15:43.600 +0200
OS Version:      Mac OS X 10.13.3 (17D102)
Report Version:  7
Analysis Tool:   /Applications/Xcode.app/Contents/Developer/usr/bin/vmmap
Analysis Tool Version:  Xcode 9.3 (9E145)

Physical footprint:         896K
Physical footprint (peak):  920K
----

Virtual Memory Map of process 15737 (fsnotifier)
Output report format:  2.4  -- 64-bit process
VM page size:  4096 bytes

==== Non-writable regions for process 15737
REGION TYPE                      START - END             [ VSIZE  RSDNT  DIRTY   SWAP] PRT/MAX SHRMOD PURGE    REGION DETAIL
__TEXT                 00000001000bb000-00000001000bd000 [    8K     8K     0K     0K] r-x/rwx SM=COW          /Applications/WebStorm.app/Contents/bin/fsnotifier
__LINKEDIT             00000001000be000-00000001000bf000 [    4K     4K     0K     0K] r--/rwx SM=COW          /Applications/WebStorm.app/Contents/bin/fsnotifier
MALLOC metadata        00000001000c1000-00000001000c2000 [    4K     4K     4K     0K] r--/rwx SM=COW          DefaultMallocZone_0x1000c1000 zone structure
MALLOC guard page      00000001000c3000-00000001000c4000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000ca000-00000001000cb000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000cb000-00000001000cc000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC guard page      00000001000d2000-00000001000d3000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC metadata        00000001000d3000-00000001000d4000 [    4K     4K     4K     0K] r--/rwx SM=PRV
MALLOC metadata        00000001000d4000-00000001000d5000 [    4K     4K     4K     0K] r--/rwx SM=COW          GFXMallocZone_0x1000d4000 zone structure
MALLOC guard page      00000001000d6000-00000001000d7000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000dd000-00000001000de000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000de000-00000001000df000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC guard page      00000001000e5000-00000001000e6000 [    4K     0K     0K     0K] ---/rwx SM=NUL
__TEXT                 000000010c249000-000000010c294000 [  300K   252K     0K     0K] r-x/rwx SM=COW          /usr/lib/dyld
__LINKEDIT             000000010c2cc000-000000010c2e7000 [  108K    96K     0K     0K] r--/rwx SM=COW          /usr/lib/dyld
STACK GUARD            0000700007db9000-0000700007dba000 [    4K     0K     0K     0K] ---/rwx SM=NUL          stack guard for thread 1
STACK GUARD            0000700007ebf000-0000700007ec0000 [    4K     0K     0K     0K] ---/rwx SM=NUL          stack guard for thread 2
STACK GUARD            00007ffeebb45000-00007ffeef345000 [ 56.0M     0K     0K     0K] ---/rwx SM=NUL          stack guard for thread 0
__TEXT                 00007fff469a9000-00007fff469aa000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Accelerate
__TEXT                 00007fff469c2000-00007fff47111000 [ 7484K   736K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/vImage
__TEXT                 00007fff47111000-00007fff472b3000 [ 1672K   332K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
__TEXT                 00007fff472b3000-00007fff472ee000 [  236K    64K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBNNS.dylib
__TEXT                 00007fff472ee000-00007fff476c8000 [ 3944K   104K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLAPACK.dylib
__TEXT                 00007fff476c8000-00007fff476df000 [   92K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLinearAlgebra.dylib
__TEXT                 00007fff476df000-00007fff476e5000 [   24K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libQuadrature.dylib
__TEXT                 00007fff476e5000-00007fff47744000 [  380K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparse.dylib
__TEXT                 00007fff47744000-00007fff47757000 [   76K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparseBLAS.dylib
__TEXT                 00007fff47757000-00007fff478cb000 [ 1488K   500K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvDSP.dylib
__TEXT                 00007fff478cb000-00007fff47981000 [  728K    64K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvMisc.dylib
__TEXT                 00007fff47981000-00007fff47982000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/vecLib
__TEXT                 00007fff48b20000-00007fff48b21000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/ApplicationServices
__TEXT                 00007fff48b21000-00007fff48b88000 [  412K    76K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/ATS
__TEXT                 00007fff48c20000-00007fff48d43000 [ 1164K   576K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontParser.dylib
__TEXT                 00007fff48d43000-00007fff48d8e000 [  300K   196K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontRegistry.dylib
__TEXT                 00007fff48ecf000-00007fff48ed4000 [   20K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ColorSyncLegacy.framework/Versions/A/ColorSyncLegacy
__TEXT                 00007fff48f73000-00007fff48fc6000 [  332K   324K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices
__TEXT                 00007fff48fc6000-00007fff48fd5000 [   60K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/LangAnalysis.framework/Versions/A/LangAnalysis
__TEXT                 00007fff48fd5000-00007fff49022000 [  308K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/PrintCore.framework/Versions/A/PrintCore
__TEXT                 00007fff49022000-00007fff4905d000 [  236K    40K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/QD.framework/Versions/A/QD
__TEXT                 00007fff4905d000-00007fff4906a000 [   52K    52K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/SpeechSynthesis.framework/Versions/A/SpeechSynthesis
__TEXT                 00007fff4906a000-00007fff492f6000 [ 2608K  2256K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/AudioToolbox.framework/Versions/A/AudioToolbox
__TEXT                 00007fff4960c000-00007fff4999f000 [ 3660K  3128K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
__TEXT                 00007fff49ebf000-00007fff49f79000 [  744K   368K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ColorSync.framework/Versions/A/ColorSync
__TEXT                 00007fff4a105000-00007fff4a199000 [  592K   408K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreAudio.framework/Versions/A/CoreAudio
__TEXT                 00007fff4a229000-00007fff4a58c000 [ 3468K  3224K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
__TEXT                 00007fff4a58c000-00007fff4a659000 [  820K   464K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreDisplay.framework/Versions/A/CoreDisplay
__TEXT                 00007fff4a659000-00007fff4aaf3000 [ 4712K  3176K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
__TEXT                 00007fff4aaf4000-00007fff4b120000 [ 6320K  4464K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreGraphics.framework/Versions/A/CoreGraphics
__TEXT                 00007fff4b121000-00007fff4b411000 [ 3008K  1180K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreImage.framework/Versions/A/CoreImage
__TEXT                 00007fff4b7d0000-00007fff4b7d1000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/CoreServices
__TEXT                 00007fff4b7d1000-00007fff4b846000 [  468K   432K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/AE.framework/Versions/A/AE
__TEXT                 00007fff4b846000-00007fff4bb1e000 [ 2912K  1024K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/CarbonCore.framework/Versions/A/CarbonCore
__TEXT                 00007fff4bb1e000-00007fff4bb53000 [  212K   172K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/DictionaryServices.framework/Versions/A/DictionaryServices
__TEXT                 00007fff4bb53000-00007fff4bb5c000 [   36K    36K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/FSEvents.framework/Versions/A/FSEvents
__TEXT                 00007fff4bb5c000-00007fff4bd15000 [ 1764K  1560K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/LaunchServices
__TEXT                 00007fff4bd15000-00007fff4bdc5000 [  704K   660K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/Metadata.framework/Versions/A/Metadata
__TEXT                 00007fff4bdc5000-00007fff4be23000 [  376K    56K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/OSServices.framework/Versions/A/OSServices
__TEXT                 00007fff4be23000-00007fff4be92000 [  444K   204K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SearchKit.framework/Versions/A/SearchKit
__TEXT                 00007fff4be92000-00007fff4beb7000 [  148K   132K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SharedFileList.framework/Versions/A/SharedFileList
__TEXT                 00007fff4c151000-00007fff4c2a0000 [ 1340K  1236K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
__TEXT                 00007fff4c2a0000-00007fff4c2db000 [  236K   156K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
__TEXT                 00007fff4c5e0000-00007fff4c5e6000 [   24K    24K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/DiskArbitration.framework/Versions/A/DiskArbitration
__TEXT                 00007fff4c7a6000-00007fff4cb6c000 [ 3864K  3696K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
__TEXT                 00007fff4cbdb000-00007fff4cc0c000 [  196K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/GSS.framework/Versions/A/GSS
__TEXT                 00007fff4ce80000-00007fff4cf1c000 [  624K   600K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
__TEXT                 00007fff4cf1d000-00007fff4cf25000 [   32K    32K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/IOSurface.framework/Versions/A/IOSurface
__TEXT                 00007fff4cf7b000-00007fff4d0f7000 [ 1520K  1372K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/ImageIO
__TEXT                 00007fff4d0f7000-00007fff4d0fc000 [   20K    20K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libGIF.dylib
__TEXT                 00007fff4d0fc000-00007fff4d1e4000 [  928K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJP2.dylib
__TEXT                 00007fff4d1e4000-00007fff4d208000 [  144K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJPEG.dylib
__TEXT                 00007fff4d4e4000-00007fff4d50b000 [  156K   148K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libPng.dylib
__TEXT                 00007fff4d50b000-00007fff4d50e000 [   12K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libRadiance.dylib
__TEXT                 00007fff4d50e000-00007fff4d55c000 [  312K    92K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libTIFF.dylib
__TEXT                 00007fff4e2ea000-00007fff4e304000 [  104K    16K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Kerberos.framework/Versions/A/Kerberos
__TEXT                 00007fff4ec82000-00007fff4ed02000 [  512K    68K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Metal.framework/Versions/A/Metal
__TEXT                 00007fff4ed1e000-00007fff4ed34000 [   88K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Versions/A/MPSCore
__TEXT                 00007fff4ed34000-00007fff4eda0000 [  432K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Versions/A/MPSImage
__TEXT                 00007fff4eda0000-00007fff4edc4000 [  144K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Versions/A/MPSMatrix
__TEXT                 00007fff4edc4000-00007fff4ee45000 [  516K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork
__TEXT                 00007fff4ee45000-00007fff4ee46000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/MetalPerformanceShaders
__TEXT                 00007fff4fe4e000-00007fff4fe5b000 [   52K    24K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/NetFS.framework/Versions/A/NetFS
__TEXT                 00007fff52c4b000-00007fff52c99000 [  312K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenCL.framework/Versions/A/OpenCL
__TEXT                 00007fff52c99000-00007fff52cb6000 [  116K   112K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenDirectory.framework/Versions/A/Frameworks/CFOpenDirectory.framework/Versions/A/CFOpenDirectory
__TEXT                 00007fff52cb6000-00007fff52cc2000 [   48K    32K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenDirectory.framework/Versions/A/OpenDirectory
__TEXT                 00007fff53e40000-00007fff53e43000 [   12K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCVMSPluginSupport.dylib
__TEXT                 00007fff53e43000-00007fff53e48000 [   20K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreFSCache.dylib
__TEXT                 00007fff53e48000-00007fff53e4d000 [   20K    20K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreVMClient.dylib
__TEXT                 00007fff53e4d000-00007fff53e56000 [   36K    36K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGFXShared.dylib
__TEXT                 00007fff53e56000-00007fff53e62000 [   48K    44K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGL.dylib
__TEXT                 00007fff53e62000-00007fff53e9e000 [  240K   140K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLImage.dylib
__TEXT                 00007fff5400b000-00007fff5404a000 [  252K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLU.dylib
__TEXT                 00007fff549c1000-00007fff549d0000 [   60K    60K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/OpenGL
__TEXT                 00007fff55817000-00007fff55a60000 [ 2340K  2040K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/QuartzCore.framework/Versions/A/QuartzCore
__TEXT                 00007fff56298000-00007fff565b0000 [ 3168K  2184K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/Security.framework/Versions/A/Security
__TEXT                 00007fff565b0000-00007fff5663b000 [  556K   120K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/SecurityFoundation.framework/Versions/A/SecurityFoundation
__TEXT                 00007fff5666c000-00007fff56670000 [   16K    16K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/ServiceManagement.framework/Versions/A/ServiceManagement
__TEXT                 00007fff56a14000-00007fff56a85000 [  452K   284K     0K     0K] r-x/r-x SM=COW          /System/Library/Frameworks/SystemConfiguration.framework/Versions/A/SystemConfiguration
__TEXT                 00007fff596b7000-00007fff59744000 [  564K    32K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/APFS.framework/Versions/A/APFS
__TEXT                 00007fff5a4cb000-00007fff5a514000 [  292K   232K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/AppleJPEG.framework/Versions/A/AppleJPEG
__TEXT                 00007fff5a54e000-00007fff5a577000 [  164K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/AppleSauce.framework/Versions/A/AppleSauce
__TEXT                 00007fff5ad62000-00007fff5ad6a000 [   32K    24K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/BackgroundTaskManagement.framework/Versions/A/BackgroundTaskManagement
__TEXT                 00007fff5c781000-00007fff5c78b000 [   40K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/CommonAuth.framework/Versions/A/CommonAuth
__TEXT                 00007fff5d197000-00007fff5d1a8000 [   68K    48K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/CoreEmoji.framework/Versions/A/CoreEmoji
__TEXT                 00007fff5e8a9000-00007fff5e8ae000 [   20K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/DSExternalDisplay.framework/Versions/A/DSExternalDisplay
__TEXT                 00007fff5f8dc000-00007fff5fd0b000 [ 4284K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/FaceCore.framework/Versions/A/FaceCore
__TEXT                 00007fff63d1e000-00007fff63d2e000 [   64K     8K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/GraphVisualizer.framework/Versions/A/GraphVisualizer
__TEXT                 00007fff63da5000-00007fff63e1a000 [  468K   120K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/Heimdal.framework/Versions/A/Heimdal
__TEXT                 00007fff646cb000-00007fff646d3000 [   32K    16K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator
__TEXT                 00007fff646d6000-00007fff646ee000 [   96K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/IOPresentment.framework/Versions/A/IOPresentment
__TEXT                 00007fff64d71000-00007fff64e67000 [  984K   512K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/LanguageModeling.framework/Versions/A/LanguageModeling
__TEXT                 00007fff64e67000-00007fff64eaa000 [  268K   176K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/Lexicon.framework/Versions/A/Lexicon
__TEXT                 00007fff64ead000-00007fff64eb5000 [   32K    32K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/LinguisticData.framework/Versions/A/LinguisticData
__TEXT                 00007fff65b16000-00007fff65b80000 [  424K    28K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/MetalTools.framework/Versions/A/MetalTools
__TEXT                 00007fff65db0000-00007fff65dd9000 [  164K    96K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/MultitouchSupport.framework/Versions/A/MultitouchSupport
__TEXT                 00007fff6603d000-00007fff66049000 [   48K     4K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/NetAuth.framework/Versions/A/NetAuth
__TEXT                 00007fff6bfde000-00007fff6c279000 [ 2668K  2540K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/SkyLight.framework/Versions/A/SkyLight
__TEXT                 00007fff6db3e000-00007fff6db46000 [   32K    28K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/TCC.framework/Versions/A/TCC
__TEXT                 00007fff6f7bc000-00007fff6f7bf000 [   12K    12K     0K     0K] r-x/r-x SM=COW          /System/Library/PrivateFrameworks/login.framework/Versions/A/Frameworks/loginsupport.framework/Versions/A/loginsupport
__TEXT                 00007fff6f922000-00007fff6f956000 [  208K   172K     0K     0K] r-x/r-x SM=COW          /usr/lib/closure/libclosured.dylib
__TEXT                 00007fff6f9f5000-00007fff6fa2f000 [  232K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libCRFSuite.dylib
__TEXT                 00007fff6fa2f000-00007fff6fa3b000 [   48K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libChineseTokenizer.dylib
__TEXT                 00007fff6facc000-00007fff6face000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/libDiagnosticMessagesClient.dylib
__TEXT                 00007fff6fb04000-00007fff6fccf000 [ 1836K  1000K     0K     0K] r-x/r-x SM=COW          /usr/lib/libFosl_dynamic.dylib
__TEXT                 00007fff6fd06000-00007fff6fd07000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libOpenScriptingUtil.dylib
__TEXT                 00007fff6fe34000-00007fff6fe36000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/libSystem.B.dylib
__TEXT                 00007fff6fec8000-00007fff6fec9000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libapple_crypto.dylib
__TEXT                 00007fff6fec9000-00007fff6fee0000 [   92K    84K     0K     0K] r-x/r-x SM=COW          /usr/lib/libapple_nghttp2.dylib
__TEXT                 00007fff6fee0000-00007fff6ff0b000 [  172K   116K     0K     0K] r-x/r-x SM=COW          /usr/lib/libarchive.2.dylib
__TEXT                 00007fff70012000-00007fff70013000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libauto.dylib
__TEXT                 00007fff70013000-00007fff700cb000 [  736K   592K     0K     0K] r-x/r-x SM=COW          /usr/lib/libboringssl.dylib
__TEXT                 00007fff700cb000-00007fff700dc000 [   68K    40K     0K     0K] r-x/r-x SM=COW          /usr/lib/libbsm.0.dylib
__TEXT                 00007fff700dc000-00007fff700ea000 [   56K    56K     0K     0K] r-x/r-x SM=COW          /usr/lib/libbz2.1.0.dylib
__TEXT                 00007fff700ea000-00007fff70141000 [  348K   308K     0K     0K] r-x/r-x SM=COW          /usr/lib/libc++.1.dylib
__TEXT                 00007fff70141000-00007fff70166000 [  148K   132K     0K     0K] r-x/r-x SM=COW          /usr/lib/libc++abi.dylib
__TEXT                 00007fff70167000-00007fff70178000 [   68K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libcmph.dylib
__TEXT                 00007fff70178000-00007fff7018f000 [   92K    68K     0K     0K] r-x/r-x SM=COW          /usr/lib/libcompression.dylib
__TEXT                 00007fff7043b000-00007fff70454000 [  100K   100K     0K     0K] r-x/r-x SM=COW          /usr/lib/libcoretls.dylib
__TEXT                 00007fff70454000-00007fff70456000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/libcoretls_cfhelpers.dylib
__TEXT                 00007fff70925000-00007fff7097c000 [  348K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/libcups.2.dylib
__TEXT                 00007fff70ab9000-00007fff70aba000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libenergytrace.dylib
__TEXT                 00007fff70af0000-00007fff70af6000 [   24K    24K     0K     0K] r-x/r-x SM=COW          /usr/lib/libheimdal-asn1.dylib
__TEXT                 00007fff70b21000-00007fff70c13000 [  968K    28K     0K     0K] r-x/r-x SM=COW          /usr/lib/libiconv.2.dylib
__TEXT                 00007fff70c13000-00007fff70e3b000 [ 2208K  1688K     0K     0K] r-x/r-x SM=COW          /usr/lib/libicucore.A.dylib
__TEXT                 00007fff70e87000-00007fff70e89000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/liblangid.dylib
__TEXT                 00007fff70e89000-00007fff70ea3000 [  104K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/liblzma.5.dylib
__TEXT                 00007fff70ea3000-00007fff70eba000 [   92K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/libmarisa.dylib
__TEXT                 00007fff70f6a000-00007fff71193000 [ 2212K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/libmecabra.dylib
__TEXT                 00007fff7136a000-00007fff71442000 [  864K   420K     0K     0K] r-x/r-x SM=COW          /usr/lib/libnetwork.dylib
__TEXT                 00007fff714b7000-00007fff718a9000 [ 4040K  3804K     0K     0K] r-x/r-x SM=COW          /usr/lib/libobjc.A.dylib
__TEXT                 00007fff718bb000-00007fff718c0000 [   20K    20K     0K     0K] r-x/r-x SM=COW          /usr/lib/libpam.2.dylib
__TEXT                 00007fff718c2000-00007fff718f7000 [  212K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/libpcap.A.dylib
__TEXT                 00007fff71975000-00007fff71992000 [  116K    32K     0K     0K] r-x/r-x SM=COW          /usr/lib/libresolv.9.dylib
__TEXT                 00007fff719e1000-00007fff71b6f000 [ 1592K  1112K     0K     0K] r-x/r-x SM=COW          /usr/lib/libsqlite3.dylib
__TEXT                 00007fff71d3f000-00007fff71d79000 [  232K    20K     0K     0K] r-x/r-x SM=COW          /usr/lib/libusrtcp.dylib
__TEXT                 00007fff71d79000-00007fff71d7d000 [   16K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/libutil.dylib
__TEXT                 00007fff71d7d000-00007fff71d8b000 [   56K    56K     0K     0K] r-x/r-x SM=COW          /usr/lib/libxar.1.dylib
__TEXT                 00007fff71d8e000-00007fff71e76000 [  928K   500K     0K     0K] r-x/r-x SM=COW          /usr/lib/libxml2.2.dylib
__TEXT                 00007fff71e76000-00007fff71e9f000 [  164K   148K     0K     0K] r-x/r-x SM=COW          /usr/lib/libxslt.1.dylib
__TEXT                 00007fff71e9f000-00007fff71eb2000 [   76K    72K     0K     0K] r-x/r-x SM=COW          /usr/lib/libz.1.dylib
__TEXT                 00007fff71f4f000-00007fff71f54000 [   20K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libcache.dylib
__TEXT                 00007fff71f54000-00007fff71f5f000 [   44K    44K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libcommonCrypto.dylib
__TEXT                 00007fff71f5f000-00007fff71f67000 [   32K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libcompiler_rt.dylib
__TEXT                 00007fff71f67000-00007fff71f70000 [   36K    36K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libcopyfile.dylib
__TEXT                 00007fff71f70000-00007fff71ff6000 [  536K   264K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libcorecrypto.dylib
__TEXT                 00007fff7207d000-00007fff720b7000 [  232K   208K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libdispatch.dylib
__TEXT                 00007fff720b7000-00007fff720d5000 [  120K   120K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libdyld.dylib
__TEXT                 00007fff720d5000-00007fff720d6000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libkeymgr.dylib
__TEXT                 00007fff720d6000-00007fff720e3000 [   52K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libkxld.dylib
__TEXT                 00007fff720e3000-00007fff720e4000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/liblaunch.dylib
__TEXT                 00007fff720e4000-00007fff720e9000 [   20K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libmacho.dylib
__TEXT                 00007fff720e9000-00007fff720ec000 [   12K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libquarantine.dylib
__TEXT                 00007fff720ec000-00007fff720ee000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libremovefile.dylib
__TEXT                 00007fff720ee000-00007fff72106000 [   96K    96K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_asl.dylib
__TEXT                 00007fff72106000-00007fff72107000 [    4K     4K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_blocks.dylib
__TEXT                 00007fff72107000-00007fff72191000 [  552K   548K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_c.dylib
__TEXT                 00007fff72191000-00007fff72195000 [   16K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_configuration.dylib
__TEXT                 00007fff72195000-00007fff72199000 [   16K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_coreservices.dylib
__TEXT                 00007fff72199000-00007fff7219b000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_darwin.dylib
__TEXT                 00007fff7219b000-00007fff721a2000 [   28K    28K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_dnssd.dylib
__TEXT                 00007fff721a2000-00007fff721ec000 [  296K   200K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_info.dylib
__TEXT                 00007fff721ec000-00007fff72212000 [  152K   120K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_kernel.dylib
__TEXT                 00007fff72212000-00007fff7225e000 [  304K   184K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_m.dylib
__TEXT                 00007fff7225e000-00007fff7227e000 [  128K   120K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_malloc.dylib
__TEXT                 00007fff7227e000-00007fff72323000 [  660K   468K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_network.dylib
__TEXT                 00007fff72323000-00007fff7232e000 [   44K    40K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_networkextension.dylib
__TEXT                 00007fff7232e000-00007fff72338000 [   40K    40K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_notify.dylib
__TEXT                 00007fff72338000-00007fff72340000 [   32K    32K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_platform.dylib
__TEXT                 00007fff72340000-00007fff7234c000 [   48K    40K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_pthread.dylib
__TEXT                 00007fff7234c000-00007fff72350000 [   16K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_sandbox.dylib
__TEXT                 00007fff72350000-00007fff72352000 [    8K     8K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_secinit.dylib
__TEXT                 00007fff72352000-00007fff7235a000 [   32K    12K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_symptoms.dylib
__TEXT                 00007fff7235a000-00007fff7236e000 [   80K    72K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libsystem_trace.dylib
__TEXT                 00007fff7236f000-00007fff72375000 [   24K    16K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libunwind.dylib
__TEXT                 00007fff72375000-00007fff723a2000 [  180K   160K     0K     0K] r-x/r-x SM=COW          /usr/lib/system/libxpc.dylib
__UNICODE              00007fffe2a3b000-00007fffe2ac7000 [  560K   416K     0K     0K] r--/r-- SM=COW          /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
__FONT_DATA            00007fffe2ac7000-00007fffe2ac8000 [    4K     0K     0K     0K] r--/r-- SM=COW          /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
__LINKEDIT             00007fffe2d4f000-00007fffee9c7000 [188.5M  61.6M     0K     0K] r--/r-- SM=COW          dyld shared cache combined __LINKEDIT
shared memory          00007fffffe00000-00007fffffe01000 [    4K     4K     4K     0K] r--/r-- SM=SHM
shared memory          00007ffffff2d000-00007ffffff2e000 [    4K     4K     4K     0K] r-x/r-x SM=SHM

==== Writable regions for process 15737
REGION TYPE                      START - END             [ VSIZE  RSDNT  DIRTY   SWAP] PRT/MAX SHRMOD PURGE    REGION DETAIL
__DATA                 00000001000bd000-00000001000be000 [    4K     4K     4K     0K] rw-/rwx SM=COW          /Applications/WebStorm.app/Contents/bin/fsnotifier
Kernel Alloc Once      00000001000bf000-00000001000c1000 [    8K     0K     0K     4K] rw-/rwx SM=PRV
MALLOC metadata        00000001000c2000-00000001000c3000 [    4K     4K     4K     0K] rw-/rwx SM=COW
MALLOC metadata        00000001000c4000-00000001000ca000 [   24K    24K    24K     0K] rw-/rwx SM=PRV
MALLOC metadata        00000001000cc000-00000001000d2000 [   24K    20K    20K     4K] rw-/rwx SM=COW
MALLOC metadata        00000001000d5000-00000001000d6000 [    4K     4K     4K     0K] rw-/rwx SM=COW
MALLOC metadata        00000001000d7000-00000001000dd000 [   24K     0K     0K    24K] rw-/rwx SM=COW
MALLOC metadata        00000001000df000-00000001000e5000 [   24K     0K     0K    24K] rw-/rwx SM=COW
Dispatch continuations 0000000100200000-0000000101200000 [ 16.0M     0K     0K    32K] rw-/rwx SM=PRV
__DATA                 000000010c294000-000000010c297000 [   12K     4K     4K     8K] rw-/rwx SM=COW          /usr/lib/dyld
__DATA                 000000010c297000-000000010c2cc000 [  212K     8K     8K    68K] rw-/rwx SM=PRV          /usr/lib/dyld
Stack                  0000700007dba000-0000700007e3c000 [  520K    24K    24K     0K] rw-/rwx SM=PRV          thread 1
Stack                  0000700007ec0000-0000700007f42000 [  520K     0K     0K     8K] rw-/rwx SM=PRV          thread 2
MALLOC_TINY            00007ff1a3c00000-00007ff1a4000000 [ 4096K    56K    56K    44K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a4000000-00007ff1a5000000 [ 16.0M    12K    12K    24K] rw-/rwx SM=COW          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a5000000-00007ff1a5800000 [ 8192K     8K     8K     0K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_TINY            00007ff1a5800000-00007ff1a5b00000 [ 3072K    24K    24K    12K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_TINY (empty)    00007ff1a5b00000-00007ff1a5c00000 [ 1024K     8K     8K     4K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a6000000-00007ff1a6800000 [ 8192K     4K     4K     4K] rw-/rwx SM=COW          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a6800000-00007ff1a7000000 [ 8192K     8K     8K     0K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
Stack                  00007ffeef345000-00007ffeefb45000 [ 8192K     4K     4K    28K] rw-/rwx SM=PRV          thread 0
__DATA                 00007fffa3c8e000-00007fffa3c9e000 [   64K    40K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/vImage
__DATA                 00007fffa3c9e000-00007fffa3ca0000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
__DATA                 00007fffa3ca0000-00007fffa3ca1000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBNNS.dylib
__DATA                 00007fffa3ca1000-00007fffa3ca6000 [   20K    12K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLAPACK.dylib
__DATA                 00007fffa3ca6000-00007fffa3ca7000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLinearAlgebra.dylib
__DATA                 00007fffa3ca7000-00007fffa3ca8000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libQuadrature.dylib
__DATA                 00007fffa3ca8000-00007fffa3cae000 [   24K    20K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparse.dylib
__DATA                 00007fffa3cae000-00007fffa3caf000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparseBLAS.dylib
__DATA                 00007fffa3caf000-00007fffa3cb0000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvDSP.dylib
__DATA                 00007fffa3cb0000-00007fffa3cb1000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvMisc.dylib
__DATA                 00007fffa4177000-00007fffa417f000 [   32K    28K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/ATS
__DATA                 00007fffa4188000-00007fffa41bf000 [  220K    92K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontParser.dylib
__DATA                 00007fffa41bf000-00007fffa41ca000 [   44K    44K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontRegistry.dylib
__DATA                 00007fffa41eb000-00007fffa41ec000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ColorSyncLegacy.framework/Versions/A/ColorSyncLegacy
__DATA                 00007fffa41f5000-00007fffa41ff000 [   40K    36K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices
__DATA                 00007fffa41ff000-00007fffa4201000 [    8K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/LangAnalysis.framework/Versions/A/LangAnalysis
__DATA                 00007fffa4201000-00007fffa4208000 [   28K    28K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/PrintCore.framework/Versions/A/PrintCore
__DATA                 00007fffa4208000-00007fffa420a000 [    8K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/QD.framework/Versions/A/QD
__DATA                 00007fffa420a000-00007fffa420d000 [   12K    12K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/SpeechSynthesis.framework/Versions/A/SpeechSynthesis
__DATA                 00007fffa420d000-00007fffa4238000 [  172K   152K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/AudioToolbox.framework/Versions/A/AudioToolbox
__DATA                 00007fffa4317000-00007fffa4400000 [  932K   684K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
__DATA                 00007fffa4400000-00007fffa4435000 [  212K   200K     0K    12K] rw-/rwx SM=COW          /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
__DATA                 00007fffa450e000-00007fffa451b000 [   52K    48K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ColorSync.framework/Versions/A/ColorSync
__DATA                 00007fffa45c4000-00007fffa45c7000 [   12K    12K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreAudio.framework/Versions/A/CoreAudio
__DATA                 00007fffa45eb000-00007fffa4680000 [  596K   584K     0K    12K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
__DATA                 00007fffa4680000-00007fffa468c000 [   48K    36K     0K    12K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreDisplay.framework/Versions/A/CoreDisplay
__DATA                 00007fffa468c000-00007fffa47d9000 [ 1332K  1308K    32K    24K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
__DATA                 00007fffa47da000-00007fffa481d000 [  268K   128K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreGraphics.framework/Versions/A/CoreGraphics
__DATA                 00007fffa481e000-00007fffa489f000 [  516K   512K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreImage.framework/Versions/A/CoreImage
__DATA                 00007fffa48f0000-00007fffa48f5000 [   20K    20K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/AE.framework/Versions/A/AE
__DATA                 00007fffa48f5000-00007fffa490a000 [   84K    68K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/CarbonCore.framework/Versions/A/CarbonCore
__DATA                 00007fffa490a000-00007fffa4912000 [   32K    32K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/DictionaryServices.framework/Versions/A/DictionaryServices
__DATA                 00007fffa4912000-00007fffa4913000 [    4K     4K     4K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/FSEvents.framework/Versions/A/FSEvents
__DATA                 00007fffa4913000-00007fffa4952000 [  252K   244K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/LaunchServices
__DATA                 00007fffa4952000-00007fffa4984000 [  200K   144K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/Metadata.framework/Versions/A/Metadata
__DATA                 00007fffa4984000-00007fffa4991000 [   52K    52K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/OSServices.framework/Versions/A/OSServices
__DATA                 00007fffa4991000-00007fffa499c000 [   44K    44K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SearchKit.framework/Versions/A/SearchKit
__DATA                 00007fffa499c000-00007fffa49a8000 [   48K    48K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SharedFileList.framework/Versions/A/SharedFileList
__DATA                 00007fffa4a05000-00007fffa4a2b000 [  152K   148K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
__DATA                 00007fffa4a2b000-00007fffa4a31000 [   24K    24K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
__DATA                 00007fffa4aba000-00007fffa4abc000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/DiskArbitration.framework/Versions/A/DiskArbitration
__DATA                 00007fffa4b3e000-00007fffa4c40000 [ 1032K   984K     0K    48K] rw-/rwx SM=COW          /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
__DATA                 00007fffa4c9b000-00007fffa4ca1000 [   24K    16K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/GSS.framework/Versions/A/GSS
__DATA                 00007fffa4d1b000-00007fffa4d26000 [   44K    44K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
__DATA                 00007fffa4d27000-00007fffa4d29000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/IOSurface.framework/Versions/A/IOSurface
__DATA                 00007fffa4d45000-00007fffa4d63000 [  120K   116K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/ImageIO
__DATA                 00007fffa4d63000-00007fffa4d64000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libGIF.dylib
__DATA                 00007fffa4d64000-00007fffa4d68000 [   16K    12K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJP2.dylib
__DATA                 00007fffa4d68000-00007fffa4d69000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJPEG.dylib
__DATA                 00007fffa4d6f000-00007fffa4d70000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libPng.dylib
__DATA                 00007fffa4d70000-00007fffa4d71000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libRadiance.dylib
__DATA                 00007fffa4d71000-00007fffa4d75000 [   16K    16K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libTIFF.dylib
__DATA                 00007fffa4e69000-00007fffa4e6b000 [    8K     0K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/Kerberos.framework/Versions/A/Kerberos
__DATA                 00007fffa4fc5000-00007fffa4ff8000 [  204K   200K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/Metal.framework/Versions/A/Metal
__DATA                 00007fffa5002000-00007fffa5008000 [   24K    24K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/Versions/A/MPSCore
__DATA                 00007fffa5008000-00007fffa502a000 [  136K    84K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/Versions/A/MPSImage
__DATA                 00007fffa502a000-00007fffa5033000 [   36K    32K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/Versions/A/MPSMatrix
__DATA                 00007fffa5033000-00007fffa505f000 [  176K   156K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork
__DATA                 00007fffa505f000-00007fffa5060000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/MetalPerformanceShaders
__DATA                 00007fffa50b8000-00007fffa50b9000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/NetFS.framework/Versions/A/NetFS
__DATA                 00007fffa576e000-00007fffa577a000 [   48K    48K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/OpenCL.framework/Versions/A/OpenCL
__DATA                 00007fffa577a000-00007fffa5783000 [   36K    36K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/OpenDirectory.framework/Versions/A/Frameworks/CFOpenDirectory.framework/Versions/A/CFOpenDirectory
__DATA                 00007fffa5783000-00007fffa5789000 [   24K    24K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/OpenDirectory.framework/Versions/A/OpenDirectory
__DATA                 00007fffa599b000-00007fffa599c000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCVMSPluginSupport.dylib
__DATA                 00007fffa599c000-00007fffa599d000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreFSCache.dylib
__DATA                 00007fffa599d000-00007fffa599e000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreVMClient.dylib
__DATA                 00007fffa599e000-00007fffa599f000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGFXShared.dylib
__DATA                 00007fffa599f000-00007fffa59a0000 [    4K     0K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGL.dylib
__DATA                 00007fffa59a0000-00007fffa59a1000 [    4K     0K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLImage.dylib
__DATA                 00007fffa59ad000-00007fffa59ae000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLU.dylib
__DATA                 00007fffa5a1d000-00007fffa5a1f000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/OpenGL.framework/Versions/A/OpenGL
__DATA                 00007fffa5d94000-00007fffa5dc8000 [  208K   208K     0K     0K] rw-/rw- SM=COW          /System/Library/Frameworks/QuartzCore.framework/Versions/A/QuartzCore
__DATA                 00007fffa5ec9000-00007fffa5f13000 [  296K   280K     0K     8K] rw-/rwx SM=COW          /System/Library/Frameworks/Security.framework/Versions/A/Security
__DATA                 00007fffa5f13000-00007fffa5f3b000 [  160K   144K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/SecurityFoundation.framework/Versions/A/SecurityFoundation
__DATA                 00007fffa5f4c000-00007fffa5f4d000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/Frameworks/ServiceManagement.framework/Versions/A/ServiceManagement
__DATA                 00007fffa5ff7000-00007fffa6002000 [   44K    40K     0K     4K] rw-/rwx SM=COW          /System/Library/Frameworks/SystemConfiguration.framework/Versions/A/SystemConfiguration
__DATA                 00007fffa64ba000-00007fffa64be000 [   16K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/APFS.framework/Versions/A/APFS
__DATA                 00007fffa66fd000-00007fffa66fe000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/AppleJPEG.framework/Versions/A/AppleJPEG
__DATA                 00007fffa670b000-00007fffa670d000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/AppleSauce.framework/Versions/A/AppleSauce
__DATA                 00007fffa68e5000-00007fffa68e8000 [   12K    12K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/BackgroundTaskManagement.framework/Versions/A/BackgroundTaskManagement
__DATA                 00007fffa6e49000-00007fffa6e4a000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/CommonAuth.framework/Versions/A/CommonAuth
__DATA                 00007fffa7002000-00007fffa7004000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/CoreEmoji.framework/Versions/A/CoreEmoji
__DATA                 00007fffa74a2000-00007fffa74a3000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/DSExternalDisplay.framework/Versions/A/DSExternalDisplay
__DATA                 00007fffa76e1000-00007fffa78e6000 [ 2068K    28K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/FaceCore.framework/Versions/A/FaceCore
__DATA                 00007fffa8034000-00007fffa8037000 [   12K    12K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/GraphVisualizer.framework/Versions/A/GraphVisualizer
__DATA                 00007fffa8051000-00007fffa8061000 [   64K    44K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/Heimdal.framework/Versions/A/Heimdal
__DATA                 00007fffa824e000-00007fffa824f000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator
__DATA                 00007fffa8251000-00007fffa8254000 [   12K    12K     0K     0K] rw-/rwx SM=COW          /System/Library/PrivateFrameworks/IOPresentment.framework/Versions/A/IOPresentment
__DATA                 00007fffa835e000-00007fffa836b000 [   52K    48K     0K     4K] rw-/rwx SM=COW          /System/Library/PrivateFrameworks/LanguageModeling.framework/Versions/A/LanguageModeling
__DATA                 00007fffa836b000-00007fffa836f000 [   16K    16K     0K     0K] rw-/rwx SM=COW          /System/Library/PrivateFrameworks/Lexicon.framework/Versions/A/Lexicon
__DATA                 00007fffa8370000-00007fffa8372000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /System/Library/PrivateFrameworks/LinguisticData.framework/Versions/A/LinguisticData
__DATA                 00007fffa860e000-00007fffa8630000 [  136K   124K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/MetalTools.framework/Versions/A/MetalTools
__DATA                 00007fffa8688000-00007fffa868a000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/MultitouchSupport.framework/Versions/A/MultitouchSupport
__DATA                 00007fffa86f7000-00007fffa86f9000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/NetAuth.framework/Versions/A/NetAuth
__DATA                 00007fffa9b49000-00007fffa9b6c000 [  140K   132K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/SkyLight.framework/Versions/A/SkyLight
__DATA                 00007fffaa02d000-00007fffaa02f000 [    8K     8K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/TCC.framework/Versions/A/TCC
__DATA                 00007fffaa5c4000-00007fffaa5c5000 [    4K     4K     0K     0K] rw-/rw- SM=COW          /System/Library/PrivateFrameworks/login.framework/Versions/A/Frameworks/loginsupport.framework/Versions/A/loginsupport
__DATA                 00007fffaa63d000-00007fffaa63f000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/closure/libclosured.dylib
__DATA                 00007fffaa649000-00007fffaa64a000 [    4K     0K     0K     4K] rw-/rwx SM=COW          /usr/lib/libCRFSuite.dylib
__DATA                 00007fffaa64a000-00007fffaa64b000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libChineseTokenizer.dylib
__DATA                 00007fffaa64f000-00007fffaa650000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libDiagnosticMessagesClient.dylib
__DATA                 00007fffaa656000-00007fffaa67b000 [  148K    52K     0K    12K] rw-/rwx SM=COW          /usr/lib/libFosl_dynamic.dylib
__DATA                 00007fffaa683000-00007fffaa684000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libOpenScriptingUtil.dylib
__DATA                 00007fffaa688000-00007fffaa689000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libSystem.B.dylib
__DATA                 00007fffaa695000-00007fffaa697000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/libapple_nghttp2.dylib
__DATA                 00007fffaa697000-00007fffaa698000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libarchive.2.dylib
__DATA                 00007fffaa69b000-00007fffaa69c000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libauto.dylib
__DATA                 00007fffaa69c000-00007fffaa6af000 [   76K    68K     0K     0K] rw-/rwx SM=COW          /usr/lib/libboringssl.dylib
__DATA                 00007fffaa6af000-00007fffaa6b1000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libbsm.0.dylib
__DATA                 00007fffaa6b1000-00007fffaa6b2000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libbz2.1.0.dylib
__DATA                 00007fffaa6b2000-00007fffaa6ba000 [   32K    12K     0K    20K] rw-/rwx SM=COW          /usr/lib/libc++.1.dylib
__DATA                 00007fffaa6ba000-00007fffaa6bc000 [    8K     4K     0K     4K] rw-/rwx SM=COW          /usr/lib/libc++abi.dylib
__DATA                 00007fffaa6bd000-00007fffaa6be000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libcmph.dylib
__DATA                 00007fffaa6be000-00007fffaa6c0000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/libcompression.dylib
__DATA                 00007fffaa741000-00007fffaa743000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/libcoretls.dylib
__DATA                 00007fffaa743000-00007fffaa744000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libcoretls_cfhelpers.dylib
__DATA                 00007fffaa7cd000-00007fffaa7d6000 [   36K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/libcups.2.dylib
__DATA                 00007fffaa8f9000-00007fffaa8fa000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libenergytrace.dylib
__DATA                 00007fffaa900000-00007fffaa901000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libheimdal-asn1.dylib
__DATA                 00007fffaa905000-00007fffaa907000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libiconv.2.dylib
__DATA                 00007fffaa907000-00007fffaa928000 [  132K   112K     0K     0K] rw-/rwx SM=COW          /usr/lib/libicucore.A.dylib
__DATA                 00007fffaa92e000-00007fffaa92f000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/liblangid.dylib
__DATA                 00007fffaa92f000-00007fffaa930000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/liblzma.5.dylib
__DATA                 00007fffaa930000-00007fffaa931000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libmarisa.dylib
__DATA                 00007fffaa934000-00007fffaa970000 [  240K   216K     0K     4K] rw-/rwx SM=COW          /usr/lib/libmecabra.dylib
__DATA                 00007fffaaac1000-00007fffaaad0000 [   60K    56K     0K     0K] rw-/rwx SM=COW          /usr/lib/libnetwork.dylib
__DATA                 00007fffaaaf9000-00007fffaac86000 [ 1588K   588K    12K    24K] rw-/rwx SM=COW          /usr/lib/libobjc.A.dylib
__DATA                 00007fffaac8f000-00007fffaac90000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libpam.2.dylib
__DATA                 00007fffaac91000-00007fffaac95000 [   16K     4K     0K     4K] rw-/rwx SM=COW          /usr/lib/libpcap.A.dylib
__DATA                 00007fffaaca5000-00007fffaaca7000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libresolv.9.dylib
__DATA                 00007fffaacb2000-00007fffaacba000 [   32K    28K     0K     0K] rw-/rwx SM=COW          /usr/lib/libsqlite3.dylib
__DATA                 00007fffaacf4000-00007fffaacf6000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libusrtcp.dylib
__DATA                 00007fffaacf6000-00007fffaacf7000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libutil.dylib
__DATA                 00007fffaacf7000-00007fffaacf8000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libxar.1.dylib
__DATA                 00007fffaacf9000-00007fffaad04000 [   44K    32K     0K     0K] rw-/rwx SM=COW          /usr/lib/libxml2.2.dylib
__DATA                 00007fffaad04000-00007fffaad05000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libxslt.1.dylib
__DATA                 00007fffaad05000-00007fffaad06000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/libz.1.dylib
__DATA                 00007fffaad55000-00007fffaad56000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libcache.dylib
__DATA                 00007fffaad56000-00007fffaad58000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libcommonCrypto.dylib
__DATA                 00007fffaad58000-00007fffaad5a000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libcompiler_rt.dylib
__DATA                 00007fffaad5a000-00007fffaad5b000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libcopyfile.dylib
__DATA                 00007fffaad5b000-00007fffaad64000 [   36K    16K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libcorecrypto.dylib
__DATA                 00007fffaad6e000-00007fffaad91000 [  140K    64K    12K    12K] rw-/rwx SM=COW          /usr/lib/system/libdispatch.dylib
__DATA                 00007fffaad91000-00007fffaad94000 [   12K     0K     0K    12K] rw-/rwx SM=COW          /usr/lib/system/libdyld.dylib
__DATA                 00007fffaad94000-00007fffaad95000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libkeymgr.dylib
__DATA                 00007fffaad95000-00007fffaad96000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libkxld.dylib
__DATA                 00007fffaad96000-00007fffaad97000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libmacho.dylib
__DATA                 00007fffaad97000-00007fffaad98000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libquarantine.dylib
__DATA                 00007fffaad98000-00007fffaad99000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libremovefile.dylib
__DATA                 00007fffaad99000-00007fffaad9b000 [    8K     8K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_asl.dylib
__DATA                 00007fffaad9b000-00007fffaad9c000 [    4K     0K     0K     4K] rw-/rwx SM=COW          /usr/lib/system/libsystem_blocks.dylib
__DATA                 00007fffaad9c000-00007fffaada5000 [   36K    24K     8K    12K] rw-/rwx SM=COW          /usr/lib/system/libsystem_c.dylib
__DATA                 00007fffaada5000-00007fffaada6000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_configuration.dylib
__DATA                 00007fffaada6000-00007fffaada7000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_coreservices.dylib
__DATA                 00007fffaada7000-00007fffaada8000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_darwin.dylib
__DATA                 00007fffaada8000-00007fffaada9000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_dnssd.dylib
__DATA                 00007fffaada9000-00007fffaadac000 [   12K    12K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_info.dylib
__DATA                 00007fffaadac000-00007fffaadaf000 [   12K    12K     4K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_kernel.dylib
__DATA                 00007fffaadaf000-00007fffaadb0000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_m.dylib
__DATA                 00007fffaadb0000-00007fffaadb3000 [   12K    12K     8K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_malloc.dylib
__DATA                 00007fffaadb3000-00007fffaadbc000 [   36K    32K     0K     4K] rw-/rwx SM=COW          /usr/lib/system/libsystem_network.dylib
__DATA                 00007fffaadbc000-00007fffaadbe000 [    8K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_networkextension.dylib
__DATA                 00007fffaadbe000-00007fffaadbf000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_notify.dylib
__DATA                 00007fffaadbf000-00007fffaadc0000 [    4K     4K     4K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_platform.dylib
__DATA                 00007fffaadc0000-00007fffaadc4000 [   16K     8K     8K     4K] rw-/rwx SM=COW          /usr/lib/system/libsystem_pthread.dylib
__DATA                 00007fffaadc4000-00007fffaadc5000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_sandbox.dylib
__DATA                 00007fffaadc5000-00007fffaadc6000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_secinit.dylib
__DATA                 00007fffaadc6000-00007fffaadc7000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libsystem_symptoms.dylib
__DATA                 00007fffaadc7000-00007fffaadc9000 [    8K     4K     0K     4K] rw-/rwx SM=COW          /usr/lib/system/libsystem_trace.dylib
__DATA                 00007fffaadc9000-00007fffaadca000 [    4K     4K     0K     0K] rw-/rwx SM=COW          /usr/lib/system/libunwind.dylib
__DATA                 00007fffaadca000-00007fffaadd1000 [   28K    16K     0K    12K] rw-/rwx SM=COW          /usr/lib/system/libxpc.dylib

==== Legend
SM=sharing mode:
	COW=copy_on_write PRV=private NUL=empty ALI=aliased
	SHM=shared ZER=zero_filled S/A=shared_alias
PURGE=purgeable mode:
	V=volatile N=nonvolatile E=empty   otherwise is unpurgeable

==== Summary for process 15737
ReadOnly portion of Libraries: Total=290.6M resident=117.0M(40%) swapped_out_or_unallocated=173.6M(60%)
Writable regions: Total=73.3M written=364K(0%) resident=208K(0%) swapped_out=280K(0%) unallocated=72.9M(99%)

                                VIRTUAL RESIDENT    DIRTY  SWAPPED VOLATILE   NONVOL    EMPTY   REGION
REGION TYPE                        SIZE     SIZE     SIZE     SIZE     SIZE     SIZE     SIZE    COUNT (non-coalesced)
===========                     ======= ========    =====  ======= ========   ======    =====  =======
Dispatch continuations            16.0M       0K       0K      32K       0K       0K       0K        2
Kernel Alloc Once                    8K       0K       0K       4K       0K       0K       0K        2
MALLOC guard page                   32K       0K       0K       0K       0K       0K       0K        9
MALLOC metadata                    116K      64K      64K      52K       0K       0K       0K       10
MALLOC_SMALL                      40.0M      32K      32K      28K       0K       0K       0K        5         see MALLOC ZONE table below
MALLOC_TINY                       7168K      80K      80K      56K       0K       0K       0K        3         see MALLOC ZONE table below
MALLOC_TINY (empty)               1024K       8K       8K       4K       0K       0K       0K        2         see MALLOC ZONE table below
STACK GUARD                       56.0M       0K       0K       0K       0K       0K       0K        4
Stack                             9232K      28K      28K      36K       0K       0K       0K        4
__DATA                            13.8M    9496K     108K     360K       0K       0K       0K      175
__FONT_DATA                          4K       0K       0K       0K       0K       0K       0K        2
__LINKEDIT                       188.6M    61.7M       0K       0K       0K       0K       0K        4
__TEXT                           102.0M    55.3M       0K       0K       0K       0K       0K      179
__UNICODE                          560K     416K       0K       0K       0K       0K       0K        2
shared memory                        8K       8K       8K       0K       0K       0K       0K        3
===========                     ======= ========    =====  ======= ========   ======    =====  =======
TOTAL                            434.1M   126.9M     328K     572K       0K       0K       0K      391

                                 VIRTUAL   RESIDENT      DIRTY    SWAPPED ALLOCATION      BYTES DIRTY+SWAP          REGION
MALLOC ZONE                         SIZE       SIZE       SIZE       SIZE      COUNT  ALLOCATED  FRAG SIZE  % FRAG   COUNT
===========                      =======  =========  =========  =========  =========  =========  =========  ======  ======
DefaultMallocZone_0x1000c1000      48.0M       120K       120K        88K        728       109K        99K     48%       7
GFXMallocZone_0x1000d4000             0K         0K         0K         0K          0         0K         0K      0%       0
===========                      =======  =========  =========  =========  =========  =========  =========  ======  ======
TOTAL                              48.0M       120K       120K        88K        728       109K        99K     48%       7

```

```md
Stack:
STACK GUARD            0000700007db9000-0000700007dba000 stack guard for thread 1
STACK GUARD            0000700007ebf000-0000700007ec0000 stack guard for thread 2
STACK GUARD            00007ffeebb45000-00007ffeef345000 stack guard for thread 0
Stack                  0000700007dba000-0000700007e3c000 thread 1
Stack                  0000700007ec0000-0000700007f42000 thread 2
Stack                  00007ffeef345000-00007ffeefb45000 thread 0
```

```md
Heap:
MALLOC metadata        00000001000c1000-00000001000c2000 [    4K     4K     4K     0K] r--/rwx SM=COW          DefaultMallocZone_0x1000c1000 zone structure
MALLOC guard page      00000001000c3000-00000001000c4000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000ca000-00000001000cb000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000cb000-00000001000cc000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC guard page      00000001000d2000-00000001000d3000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC metadata        00000001000d3000-00000001000d4000 [    4K     4K     4K     0K] r--/rwx SM=PRV
MALLOC metadata        00000001000d4000-00000001000d5000 [    4K     4K     4K     0K] r--/rwx SM=COW          GFXMallocZone_0x1000d4000 zone structure
MALLOC guard page      00000001000d6000-00000001000d7000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000dd000-00000001000de000 [    4K     0K     0K     0K] ---/rwx SM=ZER
MALLOC guard page      00000001000de000-00000001000df000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC guard page      00000001000e5000-00000001000e6000 [    4K     0K     0K     0K] ---/rwx SM=NUL
MALLOC metadata        00000001000c2000-00000001000c3000 [    4K     4K     4K     0K] rw-/rwx SM=COW
MALLOC metadata        00000001000c4000-00000001000ca000 [   24K    24K    24K     0K] rw-/rwx SM=PRV
MALLOC metadata        00000001000cc000-00000001000d2000 [   24K    20K    20K     4K] rw-/rwx SM=COW
MALLOC metadata        00000001000d5000-00000001000d6000 [    4K     4K     4K     0K] rw-/rwx SM=COW
MALLOC metadata        00000001000d7000-00000001000dd000 [   24K     0K     0K    24K] rw-/rwx SM=COW
MALLOC metadata        00000001000df000-00000001000e5000 [   24K     0K     0K    24K] rw-/rwx SM=COW
MALLOC_TINY            00007ff1a3c00000-00007ff1a4000000 [ 4096K    56K    56K    44K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a4000000-00007ff1a5000000 [ 16.0M    12K    12K    24K] rw-/rwx SM=COW          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a5000000-00007ff1a5800000 [ 8192K     8K     8K     0K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_TINY            00007ff1a5800000-00007ff1a5b00000 [ 3072K    24K    24K    12K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_TINY (empty)    00007ff1a5b00000-00007ff1a5c00000 [ 1024K     8K     8K     4K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a6000000-00007ff1a6800000 [ 8192K     4K     4K     4K] rw-/rwx SM=COW          DefaultMallocZone_0x1000c1000
MALLOC_SMALL           00007ff1a6800000-00007ff1a7000000 [ 8192K     8K     8K     0K] rw-/rwx SM=PRV          DefaultMallocZone_0x1000c1000

```

```md

MMS (?) (I'm not sure, it is Mac)
__TEXT                 00000001000bb000-00000001000bd000 /Applications/WebStorm.app/Contents/bin/fsnotifier
```

