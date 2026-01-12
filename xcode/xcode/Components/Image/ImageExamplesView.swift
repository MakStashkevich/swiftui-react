
import SwiftUI

struct ImageExamplesView: View {
    var body: some View {
        List {
            NavigationLink("System Image", destination: Image(systemName: "star.fill")
                                .font(.largeTitle)
                                .foregroundColor(.yellow))
            NavigationLink("Resizable Image", destination: Image("example_image")
                                .resizable()
                                .scaledToFit()
                                .frame(width: 100, height: 100))
            NavigationLink("Clipped Image", destination: Image(systemName: "heart.fill")
                                .resizable()
                                .frame(width: 100, height: 100)
                                .clipShape(Circle()))
        }
        .navigationTitle("Image Examples")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ImageExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        ImageExamplesView()
    }
}
