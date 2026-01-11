
import SwiftUI

struct TextExamplesView: View {
    var body: some View {
        List {
            NavigationLink("Default Text", destination: Text("Hello, SwiftUI!"))
            NavigationLink("Styled Text", destination: Text("Styled Text")
                                .font(.largeTitle)
                                .foregroundColor(.blue)
                                .bold())
            NavigationLink("Multiline Text", destination: Text("This is a very long text that will span multiple lines to demonstrate multiline text.")
                                .lineLimit(2)
                                .multilineTextAlignment(.center))
        }
        .navigationTitle("Text Examples")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct TextExamplesView_Previews: PreviewProvider {
    static var previews: some View {
        TextExamplesView()
    }
}
