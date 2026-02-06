import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Smart\nLog',
      description: 'SmartLog는 AI를 활용한 실시간 물류 자동화 효율적인 입출고를 지원하는 솔루션입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/98b0/8c6e/59f0ec57ab173d85e188beb183aae48e?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lnXCy7WVgd~7Fs8iSVQ9cDRSHPFAq6FlcYiN6zPHJsxwPaQdrTo3LoP6j2c8N7MHJd7cDMa87F8oiOJ7pOLpQTXw~bB2qmo~WWIKiUuVZVbjSjS861mKqTSxxEokkmCXji-HOR2PEff4zIIm7hEJp4vyrb-aivZdAvaDiK3itFvHyeNThNRym1EM5MPWJXT9QFK0jlg-7SmIElUkYZtAm7jiveyviCKP8LTpTYHyySrQkzsUGMwRmXqDIlvzP3gzniiUbvGTq-QRoW6YwI-1SPiD1oAW1xAMYjTT7yqNuAZaus0uqCJapElCS3qn9RqwDmjoqOACb6j5uGr1cBnL8Q__'
    },
    {
      id: 2,
      title: 'Edu\nTrack',
      description: '학생의 학습 행동 데이터를 분석하여 개인화된 학습 콘텐츠를 제공하는 교육 플랫폼입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/8009/ef2c/ec095b6b9a915c3bee96aba5891cb4e2?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZrNbgjDVSEj0EJJXA8EH1HfGB80tk1ALEAaFX7FU5xJ4SpvCOoQcvf4n4emJPWEzVqgblMhXvTYQ0adJq1r3F4aBgEkMNKnhRm1JnZRYiUyaXxBGe0hGKZ5S4SUs3yOIAgrlrgd-WFZvmXaNUcnKsY-65ggTqIS246zwTDnzZq6UJHHYkYjey32TK5W8MlJIf--92uJ6wlei8beNKTmTg0XBnBBquoEc3xFjggihNvBEslZj8ZVqC8kLmA9wy9riNwkkeD1vHIS7Gj6Pg7eQu1ZRQ-Lc-cXJxdkdnq-YxHCwTV1~EvbPw1ZnpouagnLH3K-jL7cfSJnwpLduF-iuAg__'
    },
    {
      id: 3,
      title: 'Fit\nTogether',
      description: '사용자 간 운동 목표를 공유하고, 파트너를 찾는 기능을 중심으로 한 소셜 매칭 앱입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/260e/8841/2f2eaaa862d96dbf67b37c16e0b3422d?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KszT~ywR7gn1PSvJZoA71UAQZTgAJMpEWecriCuEaQDM9APB9Er5MjBAGwSmOgc7VYFPE22IVuW6zTKkwSueITKHAwc1Na5aGIiL6wh1NsCZteFcoF29wIcySmbvRUV4GDVZ~xpghYISKbPv6KAEi6iWUGZfffVg2SEYWjn95IR3VK~xNMiP6MMbl-neb3sz9UvCq70nXH2dOnkxq7gx-wDVjA9Fb0Ywe7jTL~9rQejM8kscrUFZbnvoD7UANteY-XRt80XB-PDzLkjbrMLzpbNnUTPPLJlPDOqUg7QANDMIXbCaRKjcjJLXX9fJytmjT2UHYxmgUL7r2Swx03hCJQ__'
    },
    {
      id: 4,
      title: 'Plan\nHive',
      description: '자주 쓰는 코드, 명령어 등을 공유하고 태그별로 저장할 수 있는 커뮤니티 플랫폼입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/6508/9129/4805b8116dcadd1d4b412038cd751663?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FHeKZZkAyKsQ~Zh9ZhJdIm9~KdcDf4X5RUulLF-C1ePfFtE01LtGv7PU3fMl6i7NDTm-5j00OX1ly2d-a5naqN2ozpXnIYZTy3Svgyzpk9C4VvtF~zWa4nU2Jk8evJZgrnz1-h7u5siIOX7GHm5c9w3zcwPSAwc7YWlBsJKmlgdyWgQUdpN4rKhZya5xt4ArO-69UV5R38s4JbmxmHZKVKkH5eMbBYTTkv7PFhYPy-dKJTG1pAp6TzBTYYLXBwKsQCbP8h128MdO0y--W7tcKpOE-eSOFfPtdGhW93J3mV56bxaxXuChzf2IQGvZyXfqnyGlzZZxkB2-9t~6uoQocg__'
    },
    {
      id: 5,
      title: 'Dev\nVault',
      description: '소규모 스타트업 및 프리랜서 팀을 위한 협업 중심의 일정 관리 툴 입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/600c/99fa/a5e41e1ffbb679bbb5f48be80e500cef?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=awARJsIf07Y58aXnYhAihjLEIHdb6Ew~fjbB7W8ZeyhwsB61vlkZu2iYKeTnaz1lKH5VIoEhqRkhzi06SPoXVLVnmHj8U7DNxHnvXRqbvYAKGdbhZ3k3TwkuOEAcot9CHiVarXSom2fCDyGq5R2N4iNKiwRTvs5Xja7Kd6WctAqqz~hBFal78~9speRT7GNqL5~PcNKUKcSsQayGcKOUtE685T5rIksKuiSzhMcK5WhMi9E8F9MAcv3Hu3dY4OPxRefav9SRSKGrDNpOrkk47o87M1HHdhcBFRh7CTpaEfNHkdF5uxz7rGxG2qqZa-H5WuKlFjVB2pb8TtsuEGDN6A__'
    },
    {
      id: 6,
      title: 'Doc\nEase',
      description: '기업 내부 문서의 자동 생성, 서명, 기록 관리까지 전 과정을 자동화하는 솔루션입니다.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/db5d/caa7/9ac8c941b4b0f62751e64f84895ab95b?Expires=1771200000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=srMQ1Rt8gHdLcUYyuqha0AMMj3E7Sv7Sdml642cGMqGAL8Ot3yFvYUvsnTeNp19RWKgfc0AkwsN3ifpRnGP8lRo5riR1FKuUXtMm4IO-ImXdP3vGfbUlJqm-dcRMahBa5NNy2DGKvDSXmKAmmAQJw3c-TroZDsxgoAumnLgqKM9bOxrd~6Qg6moq0cF6SYP68XyJNCDCHi5s8k-T43ce7jHvBtzf37XLw~ctAmbxviNY3FSaa1kPiDFrny3eb-GJu-XBZsWHdv81pIrTfLmq5ets4ByO3TeEd~G~eOdCKUv5ikGNXMr6zIXfthzoyQEvvUgkmpWoJDvs0D3sVl3Gyw__'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">프로젝트</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
